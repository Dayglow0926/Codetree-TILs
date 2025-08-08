const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number);

let stack = [nums[0]];
const dupl = []

for(let i=1; i<nums.length; i++){
    const index = stack.indexOf(nums[i]);
    const duplIndex = dupl.indexOf(nums[i]);

    if(index === -1 && duplIndex === -1) stack.push(nums[i]);
    else {
        stack.splice(index, 1);
        dupl.push(nums[i])
    }
}

console.log(stack.length > 0? Math.max(...stack) : -1);