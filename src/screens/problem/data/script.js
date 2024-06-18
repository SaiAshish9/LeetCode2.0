const tags = require("./tags.json");

let index = 0;

tags.forEach((x, i) => {
  if (x.tag.toLowerCase().includes("Array")) {
    index = i;
  }
});

console.log({
  count: tags
    .slice(index)
    .map((x) => +x.count)
    .reduce((a, b) => a + b, 0),
});
