const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const common = require("./webpack.common.js");

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
			entry: ["./extern.js"]
		},
		[
			new BundleAnalyzerPlugin({
				analyzerPort: 9275
			}),

			// new UglifyJSPlugin(),

			// Move out heapu8
			new webpack.optimize.CommonsChunkPlugin({
				name: "j",
				minChunks: module => !/[\/\\]heapu8\.exclude/.test(module.resource || "")
			}),

			// Move out j
			new webpack.optimize.CommonsChunkPlugin({
				name: "x",
				minChunks: module => !/[\/\\]j\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out x
			new webpack.optimize.CommonsChunkPlugin({
				name: "o",
				minChunks: module => !/[\/\\]x\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out o
			new webpack.optimize.CommonsChunkPlugin({
				name: "s",
				minChunks: module => !/[\/\\]o\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out s
			new webpack.optimize.CommonsChunkPlugin({
				name: "l",
				minChunks: module => !/[\/\\]s\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out l
			new webpack.optimize.CommonsChunkPlugin({
				name: "g",
				minChunks: module => !/[\/\\]l\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out g
			new webpack.optimize.CommonsChunkPlugin({
				name: "h",
				minChunks: module => !/[\/\\]g\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out h
			new webpack.optimize.CommonsChunkPlugin({
				name: "g1",
				minChunks: module => !/[\/\\]h\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out g1
			new webpack.optimize.CommonsChunkPlugin({
				name: "e",
				minChunks: module => !/[\/\\]g1\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out e
			new webpack.optimize.CommonsChunkPlugin({
				name: "d",
				minChunks: module => !/[\/\\]e\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out d
			new webpack.optimize.CommonsChunkPlugin({
				name: "d1",
				minChunks: module => !/[\/\\]d\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out d1
			new webpack.optimize.CommonsChunkPlugin({
				name: "d2",
				minChunks: module => !/[\/\\]d1\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out d2
			new webpack.optimize.CommonsChunkPlugin({
				name: "f",
				minChunks: module => !/[\/\\]d2\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out f
			new webpack.optimize.CommonsChunkPlugin({
				name: "e1",
				minChunks: module => !/[\/\\]f\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out e1
			new webpack.optimize.CommonsChunkPlugin({
				name: "c",
				minChunks: module => !/[\/\\]e1\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out c
			new webpack.optimize.CommonsChunkPlugin({
				name: "c1",
				minChunks: module => !/[\/\\]c\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out c1
			new webpack.optimize.CommonsChunkPlugin({
				name: "c2",
				minChunks: module => !/[\/\\]c1\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out c2
			new webpack.optimize.CommonsChunkPlugin({
				name: "module",
				minChunks: module => !/[\/\\]c2\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out module
			new webpack.optimize.CommonsChunkPlugin({
				name: "sass",
				minChunks: module => !/[\/\\]module\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out sass
			new webpack.optimize.CommonsChunkPlugin({
				name: "vue-loader",
				minChunks: module => !/[\/\\]sass\.raw\.exclude/.test(module.resource || "")
			}),

			// Move out vue-loader
			new webpack.optimize.CommonsChunkPlugin({
				name: "postcss1",
				minChunks: module => !/vue-loader/.test(module.resource || "")
			}),

			// Move out postcss1
			new webpack.optimize.CommonsChunkPlugin({
				name: "postcss2",
				minChunks: module => !/postcss[\/\\]lib[\/\\](container|node|parser|lazy-result|tokenize|map-generator)/.test(module.resource || "")
			}),

			// Move out postcss2
			new webpack.optimize.CommonsChunkPlugin({
				name: "pako",
				minChunks: module => !/postcss/.test(module.resource || "")
			}),

			// Move out pako
			new webpack.optimize.CommonsChunkPlugin({
				name: "vue-template-compiler",
				minChunks: module => !/pako/.test(module.resource || "")
			}),

			// Move out vue-template-compiler
			new webpack.optimize.CommonsChunkPlugin({
				name: "jszip",
				minChunks: module => !/vue-template-compiler/.test(module.resource || "")
			}),

			// Move out jszip
			new webpack.optimize.CommonsChunkPlugin({
				name: "babel",
				minChunks: module => !/jszip/.test(module.resource || "")
			}),

			// Move out babel
			new webpack.optimize.CommonsChunkPlugin({
				name: "smzdl",
				minChunks: module => !/babel/.test(module.resource || "")
			}),

			// Move out source-map + vue + zero-dev-lib
			new webpack.optimize.CommonsChunkPlugin({
				name: "extern",
				minChunks: module => !/source-map|vue|zero-dev-lib/.test(module.resource || "")
			})
		],
		{
			extern: true
		},
		"ZMSStore",
		path.resolve(__dirname, "./dist/extern")
	)
];