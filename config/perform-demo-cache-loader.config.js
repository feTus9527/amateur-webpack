/** 优化：cache-loader缓存模块分析结果配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/perform-demo/perform-cache-loader",
  },
  // 统计输出
  stats: "detailed",
  // 模块配置，注释掉该部分可以明显看到构建时间有上升
  module: {
    rules: [
      {
        test: /node_modules/,
        // 使用cache-loader后，第一次构建会较费时
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(process.cwd(), ".build-cache"),
            },
          },
          "babel-loader",
        ],
      },
    ],
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
