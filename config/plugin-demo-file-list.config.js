/** 文件列表plugin配置 */
const path = require("node:path");
const FileListPlugin = require("../extensions/plugins/file-list-plugin");

module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/plugin-demo/plugin-demo-file-list/index.js",
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "app-[name]-[hash].js"
  },
  // 插件配置
  plugins: [
    new FileListPlugin(),
  ]
}
