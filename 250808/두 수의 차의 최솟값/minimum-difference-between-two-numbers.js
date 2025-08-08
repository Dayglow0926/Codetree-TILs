const fs = require("fs")
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number);
let result = 100;
for(let i=0 ; i < nums.length; i++){
    for(let j=i+1 ; j < nums.length; j++){
        const abs = Math.abs(nums[i] - nums[j])
        if(abs < result) result = abs;
    }
}

console.log(result);