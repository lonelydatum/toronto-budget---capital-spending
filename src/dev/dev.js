var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../../webpack.config.dev')

var app = new (require('express'))()
var port = 1111


var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, '../dist')));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'dev.html'));
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})




// // When inside Redux repo, prefer src to compiled version.
// // You can safely delete these lines in your project.
// var reduxSrc = path.join(__dirname, '..', '..', 'src')
// var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
// var fs = require('fs')
// if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
//   // Resolve Redux to source
//   module.exports.resolve = { alias: { 'redux': reduxSrc } }
//   // Our root .babelrc needs this flag for CommonJS output
//   process.env.BABEL_ENV = 'commonjs'
//   // Compile Redux from source
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: [ 'babel' ],
//     include: reduxSrc
//   })
// }
