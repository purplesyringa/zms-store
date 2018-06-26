import {compile, parseComponent} from "vue-template-compiler/browser";
import {transformSass, transformScss} from "./sass";
import {transformJs} from "./js";

export async function transformVue(path, code) {
	const component = parseComponent(code);

	let allCss = "";
	for(let style of component.styles) {
		let css = style.content;
		if(style.attrs.lang === "sass") {
			css = await transformSass(path + "._.sass", css);
		} else if(style.attrs.lang === "scss") {
			css = await transformScss(path + "._.scss", css);
		} else if(style.attrs.lang !== "css") {
			throw new Error(`Unknown style language ${style.attrs.lang}`);
		}

		allCss += `<zms-theme-style ${style.attrs.scoped ? "scoped" : ""}>${css}</zms-theme-style>`;
	}

	return `
		// Don't remove lambda: it's going to break with()
		// statement by enabling strict mode
		(function() {
			${transformJs(path, component.script.content)}
		})();

		exports.default.render = function render() {
			${compile(allCss + component.template.content).render};
		};
	`;
}