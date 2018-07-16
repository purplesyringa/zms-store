const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const common = require("./webpack.common.js");

let externChunks = require("./extern-chunks").map(obj => {
	const chunk = Object.keys(obj)[0];
	return {
		chunk,
		regexp: obj[chunk]
	};
});
let chunkPlugins = [];

for(let i = 0; i < externChunks.length; i++) {
	const name = (externChunks[i + 1] || {chunk: "entry"}).chunk;
	const regexp = externChunks[i].regexp;
	chunkPlugins.push(
		new webpack.optimize.CommonsChunkPlugin({
			name,
			minChunks: module => !regexp.test(module.resource || "")
		})
	);
}

module.exports = [
	common(
		{
			main: ["babel-polyfill", "./main.js"]
		},
		[
			new HtmlWebpackPlugin({
				title: "ZMS Store",
				template: "./index.html",
				seo: {
					keywords: "press,zms,zeronet,cms",
					description: "Zero Management System"
				}
			}),
			new CopyWebpackPlugin([
				{
					from: "./dbschema.json",
					to: "./dbschema.json"
				}
			]),
			new CopyWebpackPlugin([
				{
					from: "./content.json",
					to: "./content.json"
				}
			]),
			new CopyWebpackPlugin([
				{
					from: "./data",
					to: "./data"
				}
			]),
			new CopyWebpackPlugin([
				{
					from: "./fonts/OFL.txt",
					to: "./fonts/OFL.txt"
				}
			]),

			new BundleAnalyzerPlugin({
				analyzerPort: 8275
			}),

			// Move out node_modules
			new webpack.optimize.CommonsChunkPlugin({
				name: "corejs",
				minChunks: module => /node_modules/.test(module.resource || "")
			}),

			// Move out core-js
			new webpack.optimize.CommonsChunkPlugin({
				name: "vendor",
				minChunks: module => !/core-js/.test(module.resource || "")
			})
		],
		{
			extern: false
		},
		undefined,
		path.resolve(__dirname, "./dist")
	),
	common(
		{
			[externChunks[0].chunk]: ["./extern.js"]
		},
		[
			new BundleAnalyzerPlugin({
				analyzerPort: 9275
			}),

			new UglifyJSPlugin(),

			new CopyWebpackPlugin([
				{
					from: path.resolve("./extern-chunks.js"),
					to: "./chunks.js",
					transform: (content, path) => {
						return Buffer.from(content.toString("utf8").replace("module.exports = ", ""));
					}
				}
			])
		].concat(chunkPlugins),
		{
			extern: true
		},
		"ZMSStore",
		path.resolve(__dirname, "./dist/extern")
	)
];