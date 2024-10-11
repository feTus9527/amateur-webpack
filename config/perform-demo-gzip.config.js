/** 优化：gzip配置 */
const path = require("node:path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/perform-demo/perform-gzip",
  },
  stats: "detailed",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "main.js",
  },
  plugins: [
    new CompressionPlugin({
      minRatio: 0.5,
    }),
  ],
};
