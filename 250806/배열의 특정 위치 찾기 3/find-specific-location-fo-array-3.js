const fs = require("fs")
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const stack = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] === 0) break;
    stack.push(arr[i]);
}

const len = stack.length;

console.log(stack[len-1] + stack[len-2] + stack[len-3]);