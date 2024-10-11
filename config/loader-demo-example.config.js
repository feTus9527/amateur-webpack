/** loaders配置 */
const path = require("node:path");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
    test: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "./extensions/loaders/test-loader",
          "./extensions/loaders/test-loader2",
        ],
      },
      {
        test: /\.js$/,
        use: [
          "./extensions/loaders/test-loader3",
          "./extensions/loaders/test-loader4",
        ],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "app-[name]-[hash].js",
  },
};
