var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: 'bundle.js',
		path: './dist'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'] 
	},
	plugins: [
	    new HtmlWebpackPlugin({
			title: 'YouTube Hart React',
			filename: 'index.html'
	    })
  	]
}