/** 自定义图片loader配置 */
const path = require("node:path");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/loader-demo/loader-img",
  },
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [
          {
            loader: "./extensions/loaders/img-loader",
            options: {
              base64Limit: "3000",
              filename: "images/img-[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
