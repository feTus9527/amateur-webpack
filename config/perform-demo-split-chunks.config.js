/** 优化：自动分包配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  // 入口配置
  entry: {
    page1: "./src/perform-demo/perform-split-chunks/page-1",
    page2: "./src/perform-demo/perform-split-chunks/page-2",
  },
  // 优化配置
  optimization: {
    // 自动分包
    splitChunks: {
      chunks: "all",
      maxSize: 60000,
    },
  },
  // 统计输出
  stats: {
    colors: true,
    chunks: false,
    modules: false,
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name]-[hash:5].js",
  },
};
