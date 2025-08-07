const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number);
const stack = Array(9).fill(0);

nums.forEach(n => stack[n-1]++);

console.log(stack.join("\n"));