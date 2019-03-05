require('es6-promise').polyfill()

const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {

  devServer: {
    disableHostCheck: true,
    proxy: {
      "/app4": {
        target: "http://localhost:9004",
        pathRewrite: {"^/app4": ""}
      },
      "/appGame": {
        target: "http://localhost:9005",
        pathRewrite: {"^/appGame": ""}
      },
      "/appBeta": {
        target: "http://localhost:9006",
        pathRewrite: {"^/appBeta": ""}
      },
      "/appCharlie": {
        target: "http://localhost:9007",
        pathRewrite: {"^/appCharlie": ""}
      },
      "/api": {
        target: "http://localhost:3001",
        pathRewrite: {"^/api": ""}
      }
    }
  },
  configureWebpack: {
    entry: {
      'es-bundle': './src/esBundle.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'zoneEnableCrossContextCheck': 'true'
      })
    ]

    // entry: [
    //   './src/index.js',
    //   '@babel/polyfill'
    // ],
    // solve: {
    //   alias: {
    //     '@': resolve('src')
    //   },
    // }
  }
}
