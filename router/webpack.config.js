module.exports = {
	entry: './app.js',
	output: {
	  filename: './index.js',
	},
	devServer: {
		inline: true,
		contentBase: './',
		port: 8100
	},
	module: {
	  rules: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',				
			    options: {
			       presets: ['es2015', 'react']
			    }
			}
		}, 
		{
			test: /\.s[a|c]ss$/,
			loader: 'style-loader!css-loader!sass-loader'
		}
	  ]
	}
}