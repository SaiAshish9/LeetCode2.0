const id = [];
document.querySelectorAll(`[label="#"]`).forEach((x) => id.push(x.innerText));
const res = {};
const title = document
  .querySelector(".title__PM_F")
  .innerText.toLowerCase()
  .split(" ")
  .join("-");
for (let i = 0; i < id.length; i++) {
  res[id[i]] = {};
  res[id[i]]["solution"] = {};
  res[id[i]]["solution"][title] = "";
}
console.log(res);
