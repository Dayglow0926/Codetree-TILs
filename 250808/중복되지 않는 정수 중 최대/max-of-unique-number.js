const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number);

let stack = [nums[0]];

for(let i=1; i<nums.length; i++){
    const index = stack.indexOf(nums[i]);
    if(index === -1) stack.push(nums[i]);
    else{
        stack.splice(index, 1);
    }
}

console.log(stack.length > 0? Math.max(...stack) : -1);