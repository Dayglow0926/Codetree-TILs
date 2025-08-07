const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const target = arr[0].split(" ");
const nums = arr[1].split(" ");

console.log(nums.filter(n => n == target[1]).length);