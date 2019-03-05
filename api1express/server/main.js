const express = require('express')
const app = express()

let port = 3001;

const staticMiddleWare = express.static(__dirname + '/dist')

// const config = require(__dirname + '../config/webpack.config.js')
// const compiler = webpack(config)
//
// const webpackDevMiddleware = require('webpack-dev-middleware')(
//   compiler,
//   config.devServer
// )
//
// const webpackHotMiddleware = require('webpack-hot-middleware')(
//   compiler
// )
//
// server.use(webpackDevMiddleware)
// server.use(webpackHotMiddleware)
app.use('/', staticMiddleWare)

app.get('/hello', (req, res) => {
  return res.send('Hello! it API Server ' + port)
})

const server = app.listen(port, () => {
  console.log('Server is Listening ' + port)
})
