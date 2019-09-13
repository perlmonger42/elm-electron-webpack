module.exports = {
  mode: 'development',
  entry: './src/static/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:  /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader:  'elm-webpack-loader',
        options: { verbose: true },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.elm']
  }
}
