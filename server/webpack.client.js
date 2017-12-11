const path = require('path');

module.exports = {

  //  Tell webpack the root file of our server application
  entry: './src/client/client.js',

  //  Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  //  Tell webpack what type of file to see if its extension is not defined
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  //  Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                targets: {
                  browser: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  }
};
