const { merge } = require("webpack-merge");
const path = require("path");

const config = require("./webpack.config.js");

module.exports = merge(config, {
  mode: "development",
  entry: path.resolve(__dirname, "app/index.js"),
  devtool: "inline-source-map", // Corrected typo here
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app/"), // Replace 'src' with your actual source directory
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"], // Add your preferred file extensions
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
});
