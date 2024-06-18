const id = [];
const premium = [];
document.querySelectorAll(`[label="#"]`).forEach((x) => id.push(+x.innerText));
document
  .querySelectorAll(`[label="Title"]`)
  .forEach((x, k) =>
    x && x.querySelector("span") ? premium.push(id[+k]) : null
  );
console.log(premium);
