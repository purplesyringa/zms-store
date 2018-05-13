const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	context: path.resolve(__dirname, "./src"),
	entry: {
		main: ["babel-polyfill", "./main.js"]
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "./",
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						scss: "vue-style-loader!css-loader!sass-loader",
						sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
					}
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.s[ac]ss$/,
				loader: "style-loader!css-loader!sass-loader?indentedSyntax"
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["env"],
							plugins: [
								[
									"babel-plugin-transform-builtin-extend", {
										globals: ["Error", "Array"]
									}
								],
								"transform-class-properties"
							]
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["env", "flow"],
							plugins: [
								"transform-class-properties"
							]
						}
					}
				],
				include: /node_modules.*katex/
			},
			{
				test: /\.(gif|jpe?g|png)$/,
				loader: "file-loader"
			},
			{
				test: /\.svg$/,
				loader: "url-loader",
				options: {
					mimetype: "image/svg+xml"
				}
			},
			{
				test: /\.(ttf|otf|eot|woff2?)$/,
				loader: "file-loader?name=fonts/[name].[ext]"
			},
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			}
		]
	},
	plugins: [
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
	]
};