/** 自定义图片loader配置 */
const path = require("node:path");
module.exports = {
  mode: "development",
  // 开发工具配置
  devtool: "source-map",
  // 入口配置
  entry: {
    main: "./src/loader-demo/loader-img",
  },
  // 模块配置
  module: {
    // 模块匹配规则
    rules: [
      {
        // 模块名称的正则匹配
        test: /\.(png)|(jpg)|(gif)$/,
        // 匹配到后，对该模块应用的规则
        use: [
          {
            loader: "./extensions/loaders/img-loader",
            options: {
              // 图片在3000字节以内使用base编码，超出直接使用url
              base64Limit: "3000",
              // 输出文件名
              filename: "images/img-[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },
  // 出口配置
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
};
