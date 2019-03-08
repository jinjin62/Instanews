const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/script.js",
    output: {
    path: path.resolve(__dirname, "build"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      // ...other loaders...
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "lesson test",
      template: "./index.html"
    })
  ]
},
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
        {
          loader: "file-loader",
          options: {
          name: "[path][name].[ext]"
          }
        }
  ]
};
