const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const max = Math.max(...arr.filter(n => n < 500));
const min = Math.min(...arr.filter(n => n > 500));

console.log([max, min].join(" "));