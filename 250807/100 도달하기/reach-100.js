const fs = require("fs");
const number = Number(fs.readFileSync(0).toString().trim());

const stack = [1, number];

for(let i=2; stack[stack.length-1] < 100; i++){
    stack.push(stack[i-2]+ stack[i-1]);
}

console.log(stack.join(" "));