/** 优化：hmr配置 */
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/perform-demo/perform-hmr",
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "index.html"),
    }),
  ],
};
