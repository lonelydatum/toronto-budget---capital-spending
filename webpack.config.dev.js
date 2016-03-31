var path = require('path')
var webpack = require('webpack')




module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'src/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),    
    new webpack.DefinePlugin({
        "process.env": {
            BROWSER: JSON.stringify(true)
        }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname        
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?sourceMap"]
      }
    ]
  }
}

