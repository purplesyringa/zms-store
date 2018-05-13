const webpack = require("webpack");
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
			new CopyWebpackPlugin([
				{
					from: require.resolve("sass.js/dist/sass.sync.js"),
					to: "./external/sass.js"
				}
			]),
			new CopyWebpackPlugin([
				{
					from: require.resolve("@babel/standalone"),
					to: "./external/babel.js"
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
		}
	),
	common(
		{
			extern: ["./extern.js"]
		},
		[
			new BundleAnalyzerPlugin({
				analyzerPort: 9275
			})
		],
		{
			extern: true
		},
		"ZMSStore"
	)
];