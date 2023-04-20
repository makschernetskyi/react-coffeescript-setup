const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require('webpack');


module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {

		filename: "[name]-[hash].js",
		path: path.resolve(__dirname, "build")

	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html")
		})
	],
	module:{
		rules: [
			{
				test: /\.(js|jsx)/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
						presets:[
							"@babel/preset-env",
							"@babel/preset-react"
						]
					}
				}
			},
			{
				test: /\.cjsx/,
				use: [
					{
						loader: "babel-loader",
						options:{
							presets:[
								"@babel/preset-env",
								"@babel/preset-react"
							]
						}
					},
					"coffee-loader"
				]
			},
			{
				test: /\.coffee/,
				use:['coffee-loader']
			}
		],

	}

}