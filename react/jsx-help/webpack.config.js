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
		jsx: './src/jsx/index.jsx',
		tsx: './src/tsx/index.tsx'
	},
	output: {
		filename: '[name]/index.js',
		path: __dirname + '/dist'
	},
	resolve: {
		extensions: ['.js','.ts','.tsx','.jsx']
	},	
	devtool: "source-map",
	watch: true,
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
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