const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function sum(n){
    return (1 + n) * (n / 2) + (n % 2 && Math.ceil(n / 2))
}

console.log(Math.floor(sum(n) / 10));