const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number);

let result = 0;

for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
        if(nums[j] - nums[i] > result) result = nums[j] - nums[i]
    }
}


console.log(result);