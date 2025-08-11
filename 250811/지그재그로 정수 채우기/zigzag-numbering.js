const fs = require("fs");
const nums = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const arr = Array(nums[0]).fill(0).map(() => Array(nums[1]).fill(0));

let count = 0;

for(let i=0; i<nums[1]; i++){
    if(i % 2 === 0){
        for(let j = 0; j < nums[0]; j++){
            arr[j][i] = count;
            count++;
        }
    }else{
        for(let j = nums[0]-1; j >= 0; j--){
            arr[j][i] = count;
            count++;
        }
    }
}

arr.forEach((a) => console.log(a.join(" ")))