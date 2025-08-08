const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ");
const stack = [];
let numstr = arr[1];

for(let n of nums){
    if(stack.indexOf(n) > -1) numstr = numstr.replaceAll(n,"");
    else stack.push(n);
}

const result = numstr.trim().split(" ").filter(Number).map(Number);

console.log(result.length > 0 ? Math.max(...result) : -1);