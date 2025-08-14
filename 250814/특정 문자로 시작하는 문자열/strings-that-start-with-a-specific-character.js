const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const N = input[0];
const target = input[input.length-1];
let count = 0;
let totalLen = 0;

for (let i = 1; i < N; i++) {
    if(input[i][0] === target) {
       count++;
       totalLen += input[i].length;
    }
}

console.log(count, (totalLen/count).toFixed(2));
