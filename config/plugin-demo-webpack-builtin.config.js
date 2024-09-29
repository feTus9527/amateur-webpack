/** webpack内置plugin配置 */
const path = require("node:path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/plugin-demo/plugin-demo-webpack-builtin/index.js",
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js"
  },
  // 插件配置
  plugins: [
    new webpack.DefinePlugin({
      PI: `Math.PI`,
      VERSION: `"1.0.0"`,
      DOMAIN: JSON.stringify("baidu.com")
    }),
    new webpack.BannerPlugin({
      banner: `author: fetus\nname: [name]\nhash: [hash]`
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash"
    }),
  ]
}
