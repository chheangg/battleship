const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  entry: {
    app: './src/js/app.js',
    main: './src/js/main.js',
    pageLoad: './src/js/pageLoad.js',
    ship: './src/js/objects/ship.js',
    player: './src/js/objects/player.js',
    gameboard: './src/js/objects/gameboard.js',
    game: './src/js/objects/game.js',
    attack: './src/js/utilities/attack.js',
    placementEvent: './src/js/utilities/placementEvent.js',
    animation: './src/js/utilities/animation.js',
    utilities: './src/js/utilities/utilities.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    // eslint-disable-next-line new-cap
    new htmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
