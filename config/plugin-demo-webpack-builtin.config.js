/** webpack内置plugin配置 */
const path = require("node:path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/plugin-demo/plugin-webpack-builtin/index.js",
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      PI: `Math.PI`,
      VERSION: `"1.0.0"`,
      DOMAIN: JSON.stringify("baidu.com"),
    }),
    new webpack.BannerPlugin({
      banner: `author: fetus\nname: [name]\nhash: [hash]`,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash",
    }),
  ],
};
