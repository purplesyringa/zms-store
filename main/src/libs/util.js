export function readAsArrayBuffer(file) {
	return new Promise((resolve, reject) => {
		const fr = new FileReader();
		fr.onload = () => {
			resolve(fr.result);
		};
		fr.onerror = reject;
		fr.readAsArrayBuffer(file);
	});
}