/** plugins配置 */
const path = require("node:path");
const testPlugin = require("../extensions/plugins/test-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "app-[name]-[hash].js",
  },
  plugins: [testPlugin],
};
