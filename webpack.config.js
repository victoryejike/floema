const webpack = require("webpack");
const path = require("path");

// plugins
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// variables
const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const dirApp = path.join(__dirname, "app/");
const dirImages = path.join(__dirname, "images");
const dirShared = path.join(__dirname, "shared");
const dirStyles = path.join(__dirname, "styles");
const dirVideos = path.join(__dirname, "videos");
const dirNode = "node_modules";

console.log(dirApp);

module.exports = {
  entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],
  resolve: {
    modules: [dirApp, dirImages, dirStyles, dirShared, dirVideos, dirNode],
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./shared",
          to: "",
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(gif|jpe?g|woff?|png|webp|fnt|svg)$/,
        loader: "file-loader",
        options: {
          name: function (file) {
            return "[name].[ext]";
          },
        },
      },
    ],
  },
};
