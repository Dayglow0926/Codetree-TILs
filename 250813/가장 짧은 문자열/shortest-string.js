const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const stack = []

for(let str of input){
    stack.push(str.length);
}

console.log(Math.max(...stack) - Math.min(...stack));