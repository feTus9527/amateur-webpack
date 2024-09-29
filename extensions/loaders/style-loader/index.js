module.exports = function (source) {
  console.log("style-loader 执行");

  return `
      var style = document.createElement("style");
      style.innerHTML = \`${source}\`;
      document.head.appendChild(style);
      module.exports = \`${source}\`
  `;
}