var path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: "development",
	output: {
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
	  new VueLoaderPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
};
