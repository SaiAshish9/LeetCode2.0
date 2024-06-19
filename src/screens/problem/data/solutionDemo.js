const id = [];
document.querySelectorAll(`[label="#"]`).forEach((x) => id.push(x.innerText));
const res = {};
const title = document
  .querySelector(".title__PM_F")
  .innerText.toLowerCase()
  .split(" ")
  .join("_");
for (let i = 0; i < id.length; i++) {
  res[id[i]] = {};
  res[id[i]]["java"] = {};
  res[id[i]]["java"][title] = "";
}
console.log(res);
