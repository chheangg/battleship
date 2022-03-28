const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  entry: {
    main: './src/assets/js/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: '/\.css$/i',
        use: ['style-loader', 'css-loader'],
      },
      {
        test: '/\.(jpg|png|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/i',
        type: 'asset/resource',
      }
    ]
  }
}