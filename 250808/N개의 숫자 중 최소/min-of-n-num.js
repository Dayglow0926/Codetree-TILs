const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number);

const min = Math.min(...nums);
const count = nums.filter(n => n===min).length;

console.log([min, count].join(" "));