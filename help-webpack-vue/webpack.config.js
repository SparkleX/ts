var path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "bundle.js"
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		extensions: ['.js','.vue']
	},	
	plugins: [
	  // make sure to include the plugin!
	  new VueLoaderPlugin(),
	  new HTMLWebpackPlugin({template: 'index.html'})
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000
	},
};
