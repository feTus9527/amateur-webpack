const loaderUtils = require('loader-utils');

function loader(source) {
  console.log("img-loader 执行");
  var {base64Limit = 1000, filename = "[contenthash].[ext]"} = this.query;
  var moduleResult;
  if (source.byteLength >= base64Limit) {
    moduleResult = getFilePath.call(this, source);
  } else {
    var content = toBase64(source);
    moduleResult = `data:image/png;base64,${content}`;
  }

  return `
    module.exports = \`${moduleResult}\`;
  `
}

// 设置函数raw属性为true，则Webpack传入的source为原始Buffer格式数据
loader.raw = true;


function toBase64(buffer) {
  return buffer.toString("base64");
}

function getFilePath(buffer, filenameFormat) {
  var outputFileName = loaderUtils.interpolateName(this, filenameFormat, {
    content: buffer
  });
  this.emitFile(outputFileName, buffer);
  return outputFileName;
}

module.exports = loader;