const { merge } = require("webpack-merge");
const path = require("path");

const config = require("./webpack.config.js");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(config, {
  mode: "production",

  output: {
    path: path.resolve(__dirname, "public"),
  },

  plugins: [new CleanWebpackPlugin()],
});
