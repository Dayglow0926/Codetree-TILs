const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n');

const nums = arr[1].replaceAll(" ",'');
const result = [];

for(let i=0; i<nums.length; i+=5){
    result.push(nums.slice(i, i+5))
}

console.log(result.join('\n'));