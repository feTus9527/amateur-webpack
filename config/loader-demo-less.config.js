/** less-loader配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/loader-demo/loader-less",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
