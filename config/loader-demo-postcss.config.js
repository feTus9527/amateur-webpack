/** postcss-loader配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/loader-demo/loader-postcss",
  },
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
