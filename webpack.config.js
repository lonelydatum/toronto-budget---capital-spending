var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'src/static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()    
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
