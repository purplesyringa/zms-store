import {zeroAuth, zeroDB, zeroFS, zeroPage} from "../route.js";
import {readAsArrayBuffer} from "./util.js";

class Themes {
	async getSelfThemeList() {
		const auth = await zeroAuth.requestAuth();

		const selfJsonId = await zeroDB.getJsonID(`users/${auth.address}/data.json`, 2);

		return await zeroDB.query(`
			SELECT * FROM theme WHERE json_id = :self_json_id
		`, {
			self_json_id: selfJsonId
		});
	}

	async publish(title, zip, screenshot) {
		if(encodeURIComponent(title) !== escape(title)) {
			throw new Error("Use only English for the title");
		}


		const auth = await zeroAuth.requestAuth();

		const ownedThemes = await this.getSelfThemeList();

		let theme = ownedThemes.find(theme => theme.title === title);
		if(theme) {
			// OMG, a new version!!! :tada:
			theme.version++;
			delete theme.title;
			delete theme.json_id;
		} else {
			// A new plugin :'(
			theme = {version: 1};
		}

		// Set names
		theme.zip_name = `${escape(title)}.zip`;
		let ext = screenshot.name.split(".").slice(-1)[0];
		theme.screenshot_name = `${escape(title)}.${ext}`;

		// Upload it!
		await zeroDB.changePair(
			`data/users/${auth.address}/data.json`,
			`data/users/${auth.address}/content.json`,
			"theme",
			title, theme
		);

		// Now convert ZIP & screenshot
		const [zipData, screenshotData] = await Promise.all([readAsArrayBuffer(zip), readAsArrayBuffer(screenshot)]);

		// And upload them!
		await Promise.all([
			zeroFS.writeFile(`data/users/${auth.address}/${theme.zip_name}`, zipData, "arraybuffer"),
			zeroFS.writeFile(`data/users/${auth.address}/${theme.screenshot_name}`, screenshotData, "arraybuffer")
		]);

		// Awesome!
		zeroPage.publish(`data/users/${auth.address}/content.json`);

		return `${auth.address}/${escape(title)}`;
	}
}

export default new Themes();