/** babel-loader配置 */
const path = require("node:path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/loader-demo/loader-babel",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
