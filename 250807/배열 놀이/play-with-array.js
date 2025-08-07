const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number);

for(let i=2; i<arr.length; i++){
    const q = arr[i].split(" ").map(Number);

    if(q[0] === 1){
        console.log(nums[q[1]-1]);
    }else if(q[0] === 2){
        const i = nums.indexOf(q[1]);
        console.log(i !== -1 ? i+1 : 0);
    }else{
        console.log(nums.slice(q[1]-1, q[2]).join(" "));
    }
}
