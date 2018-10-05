const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const entry = ['./index.js'];
  let watch = false;
  let mode = 'production';
  let devtool;


  if (!env.production) {
    mode = 'development';
    devtool = 'eval-source-map';
  }

  return {
    entry,
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool,
    mode,
    target: 'async-node',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  modules: false,
                  targets: {
                    node: '8',
                  },
                }],
              ],
              babelrc: false,
            },
          },
        },
      ],
    },
  };
};
