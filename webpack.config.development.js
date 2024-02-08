const merge = require("webpack-merge");
const path = require("path");

const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-sorce-map",
  devServer: {
    writeToDisk: true,
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
});
