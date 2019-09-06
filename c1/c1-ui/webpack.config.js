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

const config = {
	entry: {
		test: './src/webx/test/index.jsx'
	},
	output: {
		filename: '[name]/index.js',
		path: __dirname + '/dist/webx'
	},
	resolve: {
		extensions: ['.js','.ts','.tsx','.jsx']
	},	
	devtool: "source-map",
	watch: true,
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router": "ReactRouter"
    },	
	module: {
		rules: [{
			test: /\.(jsx|tsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}]
	}	
}


module.exports = config;