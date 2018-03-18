//https://medium.com/netscape/webpack-3-react-production-build-tips-d20507dba99a
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['env', 'react', 'stage-1']
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(
      {
        test: /\.js$|.jsx$/i,
        cache: true
      }
    )
  ],
  devServer: {
    inline: false,
    contentBase: './'
  }
};
