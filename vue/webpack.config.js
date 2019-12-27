var path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
	var test = path.join(__dirname, "..", dir);
	console.debug(test);
	return test;
}



var config = {
	/*mode: "development",*/
	resolve: {
		extensions: [".js", ".vue"],
		alias: {
			vue$: "vue/dist/vue.esm.js",
			"@": __dirname + "/src"
		}
	},
	devtool: "source-map",
	externals: {
		jquery: 'jQuery'
	},	
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
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: "url-loader"
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader'
					}
				]
			}			
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HTMLWebpackPlugin({ template: "index.html" }),
		new CopyWebpackPlugin([
			{
				from: "./src/assets/",
				to: "./assets/"
			}
		]),
//		new BundleAnalyzerPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000
	},
};

var appConfig = Object.assign({}, config, {
    name: "app",
    entry: "./src/main.js",
    output: {
       path: path.resolve(__dirname, "./dist"),
       filename: "[name].js"
	}	
});

module.exports = [appConfig];

/*module.exports = {
	mode: "development",
	entry: {
		login: "./src/login/main.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js"
	},
	resolve: {
		extensions: [".js", ".vue"],
		alias: {
			vue$: "vue/dist/vue.esm.js",
			"@": __dirname + "/src"
		}
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
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: "url-loader"
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HTMLWebpackPlugin({ template: "index.html" }),
		new CopyWebpackPlugin([
			{
				from: "./src/assets",
				to: "./assets"
			}
		])
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000
	}
};
*/