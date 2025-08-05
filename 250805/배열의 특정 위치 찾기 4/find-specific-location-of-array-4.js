const fs = require("fs")
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const stack = []

for(let n of arr){
    if(n === 0) break;
    else if(!(n % 2)) stack.push(n);
}

console.log(stack.length, stack.reduce((a,b) => a+b,0));