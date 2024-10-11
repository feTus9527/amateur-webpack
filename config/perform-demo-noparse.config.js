/** 优化：减少模块分析配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/perform-demo/perform-noparse",
  },
  stats: "detailed",
  module: {
    noParse: /^(jquery|lodash)$/,
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
