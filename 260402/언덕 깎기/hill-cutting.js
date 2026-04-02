const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

// Please write your code here.
nums.sort((a,b) =>  a-b);
const count = []

for(let i=0; i<nums.length/2; i++){
    const len = nums[nums.length - 1 - i] - nums[i] - 17;
    if(len <= 0) break;

    const next = nums[i+1] - nums[0];
    const prev = nums[nums.length - 1] - nums[nums.length - 1 - i - 1];

    if(next + prev > len){
        count.push(len);
        break;
    }else{
        count.push([next, prev]);
    }
}

console.log(count.reduce((pre, cur, i) => {
    return pre + cur.reduce((pre2, cur2) => pre2 + cur2 * cur2, 0) ** ( i + 1 );
},0));