import {transform} from "@babel/standalone/src";

export function transformJs(path, code) {
	return transform(code, {
		presets: ["es2015", "es2016", "es2017", "stage-0"],
		plugins: [
			[
				require("babel-plugin-transform-builtin-extend"), {
					globals: ["Error", "Array"]
				}
			],
			require("babel-plugin-transform-class-properties"),
			require("babel-plugin-transform-object-rest-spread")
		],
		parserOpts: {
			strictMode: false
		}
	}).code;
}