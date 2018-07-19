import {transformJs} from "./js";
import {transformSass, transformScss, preload} from "./sass";
import {transformCss} from "./css";
import {transformVue} from "./vue";
import Sass from "./sass-compiler";


export default async function(prefix, blogZeroFS, statusCb) {
	let dependents = {};
	Sass.importer((request, done) => {
		let prev = request.previous.replace(/\._\.s[ac]ss$/, "").replace(`/sass/${prefix}`, "");
		let next = request.resolved.replace(/\._\.s[ac]ss$/, "").replace(`/sass/${prefix}`, "");

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
		const code = await blogZeroFS.readFile(`${prefix}${file}`);

		let result;
		if(ext === "vue") {
			result = await transformVue(`${prefix}${file}`, code);
		} else if(ext === "js") {
			result = transformJs(`${prefix}${file}`, code);
		} else if(ext === "css") {
			result = transformCss(`${prefix}${file}`, code);
		} else if(ext === "sass") {
			result = transformCss(`${prefix}${file}`, await transformSass(`${prefix}${file}`, code));
		} else if(ext === "scss") {
			result = transformCss(`${prefix}${file}`, await transformScss(`${prefix}${file}`, code));
		} else if(ext === "json") {
			result = code;
		} else {
			throw new Error(`Unknown extension ${ext}`);
		}

		compiled[file] = result;
	}

	return {compiled, dependents};
}


export async function rebuildFile(prefix, file, blogZeroFS) {
	let dependents = {};
	Sass.importer((request, done) => {
		let prev = request.previous.replace(/\._\.s[ac]ss$/, "").replace(`/sass/${prefix}`, "");
		let next = request.resolved.replace(/\._\.s[ac]ss$/, "").replace(`/sass/${prefix}`, "");

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
	const code = await blogZeroFS.readFile(`${prefix}${file}`);

	let result;
	if(ext === "vue") {
		result = await transformVue(`${prefix}${file}`, code);
	} else if(ext === "js") {
		result = transformJs(`${prefix}${file}`, code);
	} else if(ext === "css") {
		result = transformCss(`${prefix}${file}`, code);
	} else if(ext === "sass") {
		result = transformCss(`${prefix}${file}`, await transformSass(`${prefix}${file}`, code));
	} else if(ext === "scss") {
		result = transformCss(`${prefix}${file}`, await transformScss(`${prefix}${file}`, code));
	} else if(ext === "json") {
		result = code;
	} else {
		throw new Error(`Unknown extension ${ext}`);
	}

	return {result, dependents};
}