const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let max = 0;

for(let i=0; i<arr.length; i++){
    for(let j=i+2; j<arr.length; j++){
        max = Math.max(max, arr[i] + arr[j]);
    }
}

console.log(max);