/** loaders配置 */
const path = require("node:path");
module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/index.js",
    test: "./src/index.js",
  },
  // 模块配置
  module: {
    // 模块匹配规则
    rules: [
      {
        // 模块名称的正则匹配
        test: /\.js$/,
        // 匹配到后，对该模块应用的规则
        use: ["./extensions/loaders/test-loader", "./extensions/loaders/test-loader2"],
      }, {
        // 模块名称的正则匹配
        test: /\.js$/,
        // 匹配到后，对该模块应用的规则
        use: ["./extensions/loaders/test-loader3", "./extensions/loaders/test-loader4"],
      },
    ]
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "app-[name]-[hash].js",
  }
}
