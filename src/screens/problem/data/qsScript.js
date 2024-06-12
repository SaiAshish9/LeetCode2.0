const y = [];
document
  .querySelectorAll(".btn.btn-xs.btn-default")
  .forEach((x) => y.push(x.innerText));

const z = [];
document
  .querySelectorAll(".title-cell__ZGos")
  .forEach((x) => z.push(x.innerText));

const j = z.map((x) => x.toLowerCase().split(" ").join("_"));

const id = [];
document.querySelectorAll(`[label="#"]`).forEach((x) => id.push(x.innerText));

const acceptance = [];
document
  .querySelectorAll(`[label="Acceptance"]`)
  .forEach((x) => acceptance.push(x.innerText));

const difficulty = [];
document
  .querySelectorAll(`[label="Difficulty"]`)
  .forEach((x) => difficulty.push(x.innerText));

const def = document.querySelector(`.title__PM_F`).innerText;
const res = {};
const count = [];

document.querySelectorAll(`[label="Tags"]`).forEach((x) => {
  count.push(x.children[0].children.length);
});

acceptance.forEach((a, i) => {
  res[j[+i]] = {
    qno: id[+i],
    title: z[+i],
    tags: y.splice(0, count[+i]),
    default: def,
    difficulty: difficulty[+i],
    language: "Java",
    acceptance: +a.split("%")[0],
  };
});

console.log(res);
