require("../../assets/styles/less-demo.less");

for (let i = 1; i <= 10; i++) {
  const boxEl = document.createElement("div");
  boxEl.className = `box-${i}`;
  document.getElementById("app").appendChild(boxEl);
}
