// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//   entry: './src/browser/index.web.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     alias: {
//       'react-native$': 'react-native-web',
//     },
//     extensions: ['.web.js', '.js', '.tsx', '.ts', '.jsx', '.json']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['module:metro-react-native-babel-preset'],
//             plugins: ['react-native-web'],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     hot: true,
//   },
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/browser/index.web.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.tsx', '.ts', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:metro-react-native-babel-preset'],
            plugins: ['react-native-web'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/fonts',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
  },
};
