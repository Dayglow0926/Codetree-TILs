const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const stack = [];

for(let num of arr){
    if(num === 0 ) break;

    if(num % 2 === 0) stack.push(num / 2);
    else if(num % 2 !== 0) stack.push(num + 3);
    else stack.push(num)
}

console.log(stack.join(" "));