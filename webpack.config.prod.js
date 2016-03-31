var path = require('path')
var webpack = require('webpack')


module.exports = {
  devtool: 'inline-source-map',
  entry: [ './src/client/index.js' ],
  output: {
    path: path.join(__dirname, './src/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),    
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BROWSER': JSON.stringify('true')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          // presets: [ 'react-hmre' ]
        }
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?sourceMap"]
      }
    ]
  }
}

