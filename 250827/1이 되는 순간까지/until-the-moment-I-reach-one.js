const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function div(n){
    if(n === 1) return 0;

    return 1 + (n % 2 === 0 ? div(parseInt(n/2)) : div(parseInt(n/3)))
}

console.log(div(n));