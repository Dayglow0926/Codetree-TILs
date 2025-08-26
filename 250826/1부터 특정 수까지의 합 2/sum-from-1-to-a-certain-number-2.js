const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

function sum(n){
    if(n === 0) return 0;

    return n + sum(n-1);
}

console.log(sum(n));