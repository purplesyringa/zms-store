import {readAsArrayBuffer} from "./util.js";

/// #if extern
import JSZip from "jszip";
import themeProcessor, {rebuildFile} from "./theme-processor";
import crypto from "crypto";
import {Buffer} from "buffer";

export default ({zeroAuth, zeroDB, zeroFS, zeroPage, blogZeroFS}) => {
/// #else
import {zeroAuth, zeroDB, zeroFS, zeroPage} from "../route.js";
/// #endif


class Plugins {
	async getSelfPluginList() {
		const auth = await zeroAuth.requestAuth();

		const selfJsonId = await zeroDB.getJsonID(`users/${auth.address}/data.json`, 2);

		let plugins = await zeroDB.query(`
			SELECT * FROM plugin WHERE json_id = :self_json_id
		`, {
			self_json_id: selfJsonId
		});
		for(let plugin of plugins) {
			plugin.verified = await this.isVerified(auth.address, plugin.title);
			plugin.url = `view/plugin/${auth.address}/${escape(plugin.title)}`;
		}
		return plugins;
	}

	async getAllPluginList() {
		let plugins = await zeroDB.query(`
			SELECT * FROM plugin
			LEFT JOIN json ON (plugin.json_id = json.json_id)
		`);
		for(let plugin of plugins) {
			plugin.verified = await this.isVerified(plugin.directory.replace("users/", ""), plugin.title);
			plugin.url = `view/plugin/${plugin.directory.replace("users/", "")}/${escape(plugin.title)}`;
		}
		return plugins;
	}

	async publish(title, description, zip) {
		if(encodeURIComponent(title) !== escape(title)) {
			throw new Error("Use only English for the title");
		}


		const auth = await zeroAuth.requestAuth();

		const ownedPlugins = await this.getSelfPluginList();

		let plugin = ownedPlugins.find(plugin => plugin.title === title);
		if(plugin) {
			// OMG, a new version!!! :tada:
			plugin.version++;
			delete plugin.title;
			delete plugin.json_id;
		} else {
			// A new plugin :'(
			plugin = {version: 1};
		}

		// Set names
		plugin.description = description;
		plugin.zip_name = `${escape(title)}.zip`;

		// Upload it!
		await zeroDB.changePair(
			`data/users/${auth.address}/data.json`,
			`data/users/${auth.address}/content.json`,
			"plugin",
			title, plugin
		);

		// Now convert ZIP
		const zipData = await readAsArrayBuffer(zip);

		// And upload it!
		await zeroFS.writeFile(`data/users/${auth.address}/${plugin.zip_name}`, zipData, "arraybuffer");

		// Awesome!
		zeroPage.publish(`data/users/${auth.address}/content.json`);

		return `${auth.address}/${escape(title)}`;
	}

	async get(address, title) {
		const plugins = await zeroDB.query(`
			SELECT * FROM plugin
			LEFT JOIN json ON (plugin.json_id = json.json_id)
			WHERE title = :title AND directory = :directory
		`, {
			title,
			directory: `users/${address}`
		});
		const plugin = plugins[0];

		plugin.zip = `data/users/${address}/${plugin.zip_name}`;

		plugin.verified = await this.isVerified(address, plugin.title);
		plugin.url = `view/plugin/${address}/${escape(plugin.title)}`;

		return plugin;
	}

	async isVerified(address, title) {
		const contentJson = JSON.parse(await zeroFS.readFile(`data/users/${address}/content.json`));
		const sha512 = contentJson.files[`${escape(title)}.zip`].sha512;

		const v = await zeroDB.query(`
			SELECT * FROM verified WHERE id = :id
		`, {
			id: sha512
		});

		if(!v.length) {
			return 0;
		}
		return v[0].verified;
	}

	async verify(address, title, value) {
		const contentJson = JSON.parse(await zeroFS.readFile(`data/users/${address}/content.json`));
		const sha512 = contentJson.files[`${escape(title)}.zip`].sha512;

		await zeroDB.changePair(
			`data/verified/content.json`,
			`data/verified/content.json`,
			"verified",
			sha512, value
		);
	}


/// #if extern
	async downloadPlugin(plugin, statusCb=() => {}) {
		// Load ZIP
		const rawZip = await zeroFS.readFile(`data/${plugin.directory}/${plugin.zip_name}`, "arraybuffer");
		statusCb("Loaded");

		// Unpack it
		const zip = await JSZip.loadAsync(rawZip);
		statusCb("Unpacked");

		// Remove /plugins/${plugin.title}
		try {
			for(const file of await blogZeroFS.readDirectory(`plugins/${escape(plugin.title)}`, true)) {
				await blogZeroFS.deleteFile(`plugins/${escape(plugin.title)}/${file}`);
				statusCb("Removed", file);
			}
		} catch(e) {
			// Clean install, not reinstall
		}

		for(const name of Object.keys(zip.files)) {
			if(zip.files[name].dir) {
				continue;
			}

			if(name === "plugin.json") {
				// Remove _... properties
				let json = await zip.files[name].async("string");
				json = JSON.parse(json);

				for(const name of Object.keys(json)) {
					if(name[0] === "_") {
						delete json[name];
					}
				}

				json = JSON.stringify(json, null, "\t");
				await blogZeroFS.writeFile(`plugins/${escape(plugin.title)}/${name}`, json);
			} else {
				// Save file
				const buf = await zip.files[name].async("uint8array");
				await blogZeroFS.writeFile(`plugins/${escape(plugin.title)}/${name}`, buf, "arraybuffer");
			}
			statusCb("Saved", name);
		}
	}
/// #else
	async downloadPlugin() {
		throw new Error("downloadPlugin() is available in extern mode only")
	}
/// #endif

/// #if extern
	async buildPlugin(title, statusCb) {
		let {compiled: files, dependents} = await themeProcessor(`plugins/${title}/`, blogZeroFS, statusCb);
		let pluginJson = JSON.parse(files["plugin.json"] || "{}");

		pluginJson._hashes = {};
		for(const fileName of Object.keys(files)) {
			const original = await blogZeroFS.readFile(`plugins/${title}/${fileName}`, "arraybuffer");
			pluginJson._hashes[fileName] = crypto.createHash("md5").update(Buffer.from(original)).digest("hex");
		}

		pluginJson._dependents = dependents;

		files["plugin.json"] = JSON.stringify(pluginJson, null, "\t");
		return files;
	}
/// #else
	async buildPlugin() {
		throw new Error("buildPlugin() is available in extern mode only")
	}
/// #endif

/// #if extern
	async rebuildPluginFile(title, fileName) {
		return await rebuildFile(`plugins/${title}/`, fileName, blogZeroFS);
	}
/// #else
	async rebuildPluginFile() {
		throw new Error("rebuildPluginFile() is available in extern mode only")
	}
/// #endif

/// #if extern
	async savePlugin(title, files, statusCb) {
		for(let file of Object.keys(files)) {
			statusCb(`Saving ${file}`);
			await blogZeroFS.writeFile(`plugins/${title}/__build/${file}`, files[file]);
		}
	}
/// #else
	async savePlugin() {
		throw new Error("savePlugin() is available in extern mode only")
	}
/// #endif
}


/// #if extern
return new Plugins();
};
/// #else
export default new Plugins();
/// #endif