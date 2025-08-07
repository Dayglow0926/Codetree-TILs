const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");

console.log(arr[1].split(" ").map((a) => Number(a) ** 2).join(" "))