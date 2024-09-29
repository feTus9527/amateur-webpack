/** 自定义样式表loader配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/loader-demo/loader-demo-style",
  },
  // 模块配置
  module: {
    // 模块匹配规则
    rules: [
      {
        // 模块名称的正则匹配
        test: /\.css$/,
        // 匹配到后，对该模块应用的规则
        use: ["./extensions/loaders/style-loader"],
      },
    ]
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  }
}
