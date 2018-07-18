import {zeroPage} from "../../route";
import {transformJs} from "./js";
import {transformSass, transformScss, preload} from "./sass";
import {transformCss} from "./css";
import {transformVue} from "./vue";
import Sass from "./sass-compiler";

let patched = false;

async function patch() {
	const realOpen = XMLHttpRequest.prototype.open;
	const key = await zeroPage.cmd("wrapperGetAjaxKey");
	XMLHttpRequest.prototype.open = function(method, url, async) {
		return realOpen.call(this, method, `${url}?ajax_key=${key}`, async);
	};
}


export default async function(zeroPage, blogZeroFS, statusCb) {
	if(!patched) {
		patch();
		patched = true;
	}

	let dependents = {};
	Sass.importer((request, done) => {
		let prev = request.previous.replace(/\._\.s[ac]ss$/, "").replace("/sass/theme/", "");
		let next = request.resolved.replace(/\._\.s[ac]ss$/, "").replace("/sass/theme/", "");

		console.log("Found dependency", prev, "->", next);

		if(!dependents[next]) {
			dependents[next] = [];
		}
		dependents[next].push(prev);
		done();
	});


	let allFiles = await blogZeroFS.readDirectory("theme", true);
	let cssFiles = allFiles.filter(name => {
		return (
			name.endsWith(".sass") ||
			name.endsWith(".scss") ||
			name.endsWith(".css")
		);
	});
	statusCb("Preloading CSS files");
	await preload(cssFiles);



	let compiled = {};

	for(let file of allFiles) {
		statusCb(`Compiling ${file}`);

		const ext = file.split("/").slice(-1)[0].split(".").slice(-1)[0] || "";
		const code = await blogZeroFS.readFile(`theme/${file}`);

		let result;
		if(ext === "vue") {
			result = await transformVue(`theme/${file}`, code);
		} else if(ext === "js") {
			result = transformJs(`theme/${file}`, code);
		} else if(ext === "css") {
			result = transformCss(`theme/${file}`, code);
		} else if(ext === "sass") {
			result = transformCss(`theme/${file}`, await transformSass(`theme/${file}`, code));
		} else if(ext === "scss") {
			result = transformCss(`theme/${file}`, await transformScss(`theme/${file}`, code));
		} else if(ext === "json") {
			result = code;
		} else {
			throw new Error(`Unknown extension ${ext}`);
		}

		compiled[file] = result;
	}

	return {compiled, dependents};
}


export async function rebuildFile(file, zeroPage, blogZeroFS) {
	if(!patched) {
		patch();
		patched = true;
	}


	let dependents = {};
	Sass.importer((request, done) => {
		let prev = request.previous.replace(/\._\.s[ac]ss$/, "").replace("/sass/theme/", "");
		let next = request.resolved.replace(/\._\.s[ac]ss$/, "").replace("/sass/theme/", "");

		console.log("Found dependency", prev, "->", next);

		if(!dependents[next]) {
			dependents[next] = [];
		}
		dependents[next].push(prev);
		done();
	});

	let allFiles = await blogZeroFS.readDirectory("theme", true);
	let cssFiles = allFiles.filter(name => {
		return (
			name.endsWith(".sass") ||
			name.endsWith(".scss") ||
			name.endsWith(".css")
		);
	});
	await preload(cssFiles);


	const ext = file.split("/").slice(-1)[0].split(".").slice(-1)[0] || "";
	const code = await blogZeroFS.readFile(`theme/${file}`);

	let result;
	if(ext === "vue") {
		result = await transformVue(`theme/${file}`, code);
	} else if(ext === "js") {
		result = transformJs(`theme/${file}`, code);
	} else if(ext === "css") {
		result = transformCss(`theme/${file}`, code);
	} else if(ext === "sass") {
		result = transformCss(`theme/${file}`, await transformSass(`theme/${file}`, code));
	} else if(ext === "scss") {
		result = transformCss(`theme/${file}`, await transformScss(`theme/${file}`, code));
	} else if(ext === "json") {
		result = code;
	} else {
		throw new Error(`Unknown extension ${ext}`);
	}

	return {result, dependents};
}