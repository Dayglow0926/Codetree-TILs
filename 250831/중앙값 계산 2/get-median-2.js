const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const temp = [];
const result = [];

for(let i=0; i<arr.length; i++){
    temp.push(arr[i]);
    if(i % 2 === 0) {
        temp.sort((a, b) => a-b);
        result.push(temp[Math.floor(temp.length / 2)]);
    }
}

console.log(result.join(' '));