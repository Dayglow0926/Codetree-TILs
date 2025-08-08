const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

let nums = arr[1].split(" ").map(Number)
const stack = []

while(true){

    const max = Math.max(...nums);
    const index = nums.indexOf(max);

    stack.push(index + 1);
    
    if(index === 0) break;
    
    nums = nums.slice(0, index);
}

console.log(stack.join(" "));