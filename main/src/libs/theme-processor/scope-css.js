import postcss from "postcss";
import trimPlugin from "vue-loader/lib/style-compiler/plugins/trim";
import scopeIdPlugin from "vue-loader/lib/style-compiler/plugins/scope-id";

export default async function scopeCss(path, css, scopeId) {
	const plugins = [
		trimPlugin,
		scopeIdPlugin({id: scopeId})
	];
	const options = {
		to: path,
		from: path,
		map: false
	};

	const result = await postcss(plugins).process(css, options);
	return result.css;
}