module.exports = {
  entry: './index.js',
  module: {
    rules:[
      { test: /\.js$/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: 'build/bundle.js'
  }
}