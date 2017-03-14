const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
module.exports = {
  entry: [
    `eventsource-polyfill`,
    `webpack-hot-middleware/client?reload=true`,
    `webpack/hot/only-dev-server`,
    path.resolve(__dirname, 'src/index')
  ],
  debug: true,
  devtool: "cheap-module-eval-source-map",
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      "bootstrap-css": `${__dirname}/node_modules/bootstrap/dist/css/bootstrap.css`
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|dist)/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.gif/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Dinosaur List",
      template: "src/index.html",
      chunksSortMode: "dependency"
    }),
    new CopyWebpackPlugin([{
      from: "favicon.ico"
    }]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "ENV": JSON.stringify("development"),
      "process.env": {
        "ENV": JSON.stringify("development"),
        "NODE_ENV": JSON.stringify("development")
      }
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ["last 2 versions"]
    })
  ]
}
