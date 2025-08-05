const fs = require("fs")
const strArr = fs.readFileSync(0).toString().trim().split("\n");

const arr = strArr[1].split(" ").map(Number);

const stack = arr.filter((a) => !(a%2));

console.log(stack.reverse().join(" "));