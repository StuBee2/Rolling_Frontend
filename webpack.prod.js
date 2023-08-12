const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = merge(common, {
  mode: "production",
  devtool: "hidden-source-map",
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015",
        css: true,
      }),
    ],
  },
});
