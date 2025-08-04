const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ");

console.log(arr.reduce((prev, cur) => prev + Number(cur), 0))