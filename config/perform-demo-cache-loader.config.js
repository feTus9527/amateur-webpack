/** 优化：cache-loader缓存模块分析结果配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/perform-demo/perform-cache-loader",
  },
  stats: "detailed",
  module: {
    rules: [
      {
        test: /node_modules/,
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
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
