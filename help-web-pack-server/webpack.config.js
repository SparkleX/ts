var path = require("path");

module.exports = {
	mode: 'development',
  output: {
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
