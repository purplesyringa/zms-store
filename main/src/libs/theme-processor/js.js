import {transform} from "@babel/standalone";

export function transformJs(path, code) {
	return transform(code, {
		presets: ["es2015"]
	}).code;
}