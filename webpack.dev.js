const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
  },
});
