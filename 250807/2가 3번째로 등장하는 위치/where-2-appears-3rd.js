const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ");

let count = 0;

for(let i in nums){
    if(nums[i] == 2) count++;

    if(count === 3) {
        console.log(Number(i)+1);
        break;
    }
}