module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env','react','stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx','.json']
  },
  devServer: {
    inline: false,
    contentBase: './'
  }
};
