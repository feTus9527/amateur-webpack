/** 优化：tree shaking配置 */
const path = require("node:path");
const MiniCss = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: "./src/perform-demo/perform-tree-shaking",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"],
      },
    ],
  },
  stats: "detailed",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
  plugins: [
    new MiniCss(),
    new PurgeCSSPlugin({
      paths: [],
    }),
  ],
};
