const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

function f(n){
    if(n < 0) return 0;
    return arr[n] > f(n-1) ? arr[n] : f(n-1);
}

console.log(f(n-1));