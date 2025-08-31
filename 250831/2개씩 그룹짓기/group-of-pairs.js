const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number).sort((a,b) => b-a);

// Please Write your code here.

let result = 0;

for(let i=0; i<nums.length / 2 ; i++){
    const sum = nums[i]+nums[nums.length - 1 - i];

    if(result < sum) result = sum;
}

console.log(result);