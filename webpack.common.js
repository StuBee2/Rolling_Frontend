const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  entry: {
    main: path.resolve("./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "[name].[chunkhash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
        },
      },
      {
        test: /\.(png|jpg|gif|mp4|jpeg|ico)$/,
        type: "asset",
      },
      {
        test: /\.svg/,
        type: "asset",
        generator: {
          dataUrl: (content) => {
            content = content.toString();
            return svgToMiniDataURI(content);
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "esbuild-loader",
            options: {
              loader: "css",
              minify: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new RefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    alias: {
      "@src": path.resolve(__dirname, "./src"),
    },
  },
};
