const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    publicPath: "/dicoding-storyapp/",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});
