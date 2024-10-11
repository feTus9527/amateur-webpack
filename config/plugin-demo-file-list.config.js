/** 文件列表plugin配置 */
const path = require("node:path");
const FileListPlugin = require("../extensions/plugins/file-list-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/plugin-demo/plugin-file-list/index.js",
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "app-[name]-[hash].js",
  },
  plugins: [new FileListPlugin()],
};
