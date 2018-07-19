import {compile, parseComponent} from "vue-template-compiler/browser";
import {transformSass, transformScss} from "./sass";
import {transformJs} from "./js";
import scopeCss from "./scope-css";

export async function transformVue(path, code) {
	const component = parseComponent(code);
	const scopeId = "data-v-" + Math.random().toString(16).substr(2);

	let allCss = [];
	for(let style of component.styles) {
		let css = style.content;
		if(style.attrs.lang === "sass") {
			css = await transformSass(path + "._.sass", css);
		} else if(style.attrs.lang === "scss") {
			css = await transformScss(path + "._.scss", css);
		} else if(style.attrs.lang !== "css") {
			throw new Error(`Unknown style language ${style.attrs.lang}`);
		}

		if(style.attrs.scoped) {
			css = await scopeCss(path, css, scopeId);
		}

		allCss.push([
			scopeId,
			css,
			""
		]);
	}

	const compilerOptions = {scopeId};
	const compiled = compile(component.template.content, compilerOptions);

	return `
		var mExports = {};
		var mModule = {exports: mExports};

		// Don't remove lambda: it's going to break with()
		// statement by enabling strict mode
		(function(module, exports) {
			${transformJs(path, component.script.content)}
		})(mModule, mExports);

		exports.default.mExports = mExports;
		${transformJs(path, `
			exports.default.render = function() {
				${compiled.render};
			};
		`)}
		exports.default.staticRenderFns = [${
			compiled.staticRenderFns.map(f => `
				function() {
					${f}
				}
			`).join(",")
		}];
		exports.default.options = ${JSON.stringify(compilerOptions)};
		exports.default.allCss = ${JSON.stringify(allCss)};
	`;
}