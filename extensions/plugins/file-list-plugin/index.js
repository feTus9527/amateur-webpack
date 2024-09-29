module.exports = class FileListPlugin {
  constructor(filename = "file-list.txt") {
    this.filename = filename;
  }


  apply(compiler) {
    compiler.hooks.emit.tap("file-list-plugin", (compilation) => {
      const fileList = [];
      for (const key in compilation.assets) {
        const content = `[${key}]\n大小：${compilation.assets[key].size() / 1000}KB`;
        fileList.push(content);
      }
      const str = fileList.join("\n\n");
      compilation.assets[this.filename] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        }
      }
    });
  }
}