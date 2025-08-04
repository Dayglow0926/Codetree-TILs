const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(arr.reduce((prev, cur) => prev + cur, 0))