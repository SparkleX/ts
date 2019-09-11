/*module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
	entry: {
		jour: './src/webx/jour/index.js',
	},
	output: {
		filename: '[name]/index.js',
		path: __dirname + '/dist/webx'
	},
	resolve: {
		extensions: ['.js','.vue']
	},	
	devtool: "source-map",
	watch: true,
	externals: {
    },	
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},			
			{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	},
	plugins: [
	  // make sure to include the plugin!
	  new VueLoaderPlugin()
	]	
}


module.exports = config;