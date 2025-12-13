const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let result = 0;

for(let i=0; i<n-k; i++){
    result = Math.max(result, arr.slice(i, i+k).reduce((p,c) => p+c,0));
}

console.log(result);