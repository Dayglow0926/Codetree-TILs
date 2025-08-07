const fs = require("fs");
const num = Number(fs.readFileSync(0).toString().trim());

let count = 2;
const stack = []

for(let i=1; count !== 0; i++){
    const n = num * i
    stack.push(n);
    if(n % 5 === 0) count--;
}

console.log(stack.join(" "));