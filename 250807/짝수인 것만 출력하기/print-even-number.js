const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");

const num = arr[1].split(" ").map(Number);
const stack = [];

num.forEach(n => {
    if(n % 2 === 0) stack.push(n)
})

console.log(stack.join(" "));