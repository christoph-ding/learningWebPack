module.exports = {
  entry: './main.js',
  output: {
      filename: './bundle.js'
  },
  watch: true,
  module: {
  		preLoaders: [
	  		{
	  			test: /\.js$/,
	  			exclude: /node_modules/,
	  			loader: 'jshint-loader'	  			
	  		}
  		],
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                  presets: ['react', 'es2015']
              }
          }
      ],
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};