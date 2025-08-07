const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const stack = Array(9).fill(0);

for(let n of arr){
    if(n === 0) break;
    stack[parseInt(n / 10) - 1]++;
}

stack.forEach((n,i) => console.log(`${i+1} - ${n}`))