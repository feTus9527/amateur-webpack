/** plugins配置 */
const path = require("node:path");
const testPlugin = require("../extensions/plugins/test-plugin");

module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/index.js",
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "app-[name]-[hash].js"
  },
  // 插件配置
  plugins: [
    testPlugin
  ]
}
