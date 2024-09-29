(function (modules) {
  // 缓存模块的导出结果
  var __modules_cache__ = {}

  /** 加载运行一个模块，得到模块的导出结果 */
  function __require__(moduleId) {
    if (__modules_cache__[moduleId]) {
      return __modules_cache__[moduleId];
    }
    var __func__ = modules[moduleId];
    var __module__ = {
      exports: {}
    };
    __func__(__module__, __module__.exports, __require__);
    var result = __module__.exports;
    __modules_cache__[moduleId] = result;
    return result;
  }

  // 执行入口模块
  __require__("../src/index.js");
})(
  // 以下对象保存了所有的模块，以及模块下的源代码
  {
    "../src/cjs-export.js": function (module, exports, require) {
      console.log("module cjs-exports");
      module.exports = {
        a: "a"
      };
    },
    "../src/index.js": function (module, exports, __require__) {
      console.log("module index");
      var obj = __require__("../src/cjs-export.js");
      console.log("hello webpack", obj);
    }
  });