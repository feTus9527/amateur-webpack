/** 优化：thread-loader并行配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/perform-demo/perform-thread-loader",
  },
  stats: "detailed",
  // 注释掉该部分可以明显看到构建时间有上升
  module: {
    rules: [
      {
        test: /node_modules/,
        // 使用thread-loader，项目小的时候可能起到反效果
        use: ["thread-loader", "babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
