const path = require("path");

module.exports = (entry, plugins, defs, library) => {
	return {
		context: path.resolve(__dirname, "./src"),
		entry,
		output: {
			path: path.resolve(__dirname, "./dist"),
			publicPath: "./",
			filename: "[name].js",
			library
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
									"transform-class-properties",
									"transform-async-generator-functions"
								]
							}
						},
						{
							loader: "eslint-loader"
						},
						{
							loader: "ifdef-loader",
							options: defs
						}
					],
					exclude: /node_modules/
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
				}
			]
		},
		plugins
	};
};