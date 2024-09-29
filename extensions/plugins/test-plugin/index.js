class MyPlugin {
  apply(compiler) {
    console.log("plugin 执行了");
    compiler.hooks.done.tap("MyPlugin-done", function (compilation) {
      // 整个编译完成事件
      console.log("编译完成");
    });
  }
}

module.exports = new MyPlugin();