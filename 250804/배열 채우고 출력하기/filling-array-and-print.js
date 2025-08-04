const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ");

console.log(arr.reverse().join(""));