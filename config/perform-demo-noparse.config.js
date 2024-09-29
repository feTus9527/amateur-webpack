/** 优化：减少模块分析配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/perform-demo/perform-noparse",
  },
  // 统计输出
  stats: "detailed",
  // 模块配置，注释掉该部分可以明显看到构建时间有上升
  module: {
    noParse: /jquery|lodash/,
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
