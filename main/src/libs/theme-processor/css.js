export function transformCss(path, code) {
	return `
		var code = ${JSON.stringify(code)};

		var style = document.createElement("style");
		style.type = "text/css";
		if(style.styleSheet) {
			style.styleSheet.cssText = code;
		} else {
			style.appendChild(document.createTextNode(code));
		}

		document.head.appendChild(style);
	`;
}