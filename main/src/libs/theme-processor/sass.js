import Sass from "./sass-compiler";

function process(lang, path, code) {
	// First, remove empty lines
	code = code.split("\n").filter(line => line.trim()).join("\n");
	// Now, find out smallest padding
	let padding = code
		.split("\n") // Split into lines
		.map(line => line.match(/^(\s*)/)[0]) // Get padding
		.map(spaces => spaces.length) // Get padding width
		.reduce((a, b) => Math.min(a, b), Infinity); // Find least width
	// If no spaces were found, think of them as 0
	if(padding === Infinity) {
		padding = 0;
	}
	// Remove spaces
	code = code.split("\n").map(line => line.substr(padding)).join("\n");
	// Yay! We need those 10 lines of code to fix stupid {} error!

	return new Promise((resolve, reject) => {
		Sass.writeFile(path, code, () => {
			Sass.compileFile(path, result => {
				if(result.status) {
					return reject(new Error(result.formatted));
				}

				resolve(result.text || "");
			});
		});
	});
}

// Upload all CSS files to Sass
export function preload(prefix, files) {
	return new Promise(resolve => {
		Sass.preloadFiles(prefix, "", files, () => {
			resolve();
		});
	});
}
export async function transformSass(path, code) {
	return await process("sass", path, code);
}
export async function transformScss(path, code) {
	return await process("scss", path, code);
}