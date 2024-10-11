/** 优化：自动分包配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  entry: {
    page1: "./src/perform-demo/perform-split-chunks/page-1",
    page2: "./src/perform-demo/perform-split-chunks/page-2",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxSize: 60000,
    },
  },
  stats: {
    colors: true,
    chunks: false,
    modules: false,
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name]-[hash:5].js",
  },
};
