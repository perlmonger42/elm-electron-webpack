const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/static/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/', // where the dev server presents its static assets in URL paths
  },
  devServer: {
    contentBase: './dist', // where the dev server gets its static assets from the filesystem
  },
  //  NOTE: "webpack-dev-server" compiles bundle.js into a tmp file, then serves
  //  it from memory. It doesn't actually write to dist/bundle.js.  If you want
  //  your HTML to load code from "file://.../dist/bundle.js", instead of from
  //  dev server's "http://.../assets/bundle.js", then compile with "webpack".
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
