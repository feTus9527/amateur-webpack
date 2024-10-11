/** 自定义样式表loader配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/loader-demo/loader-style",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["./extensions/loaders/style-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
