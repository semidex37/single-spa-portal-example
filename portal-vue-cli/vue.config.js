// require('es6-promise').polyfill()
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {

  devServer: {
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
      }
    }
  },
  configureWebpack: {
    // entry: [
    //   './src/main.js',
    //   '@babel/polyfill'
    // ],
    // solve: {
    //   alias: {
    //     '@': resolve('src')
    //   },
    // }
  }
}
