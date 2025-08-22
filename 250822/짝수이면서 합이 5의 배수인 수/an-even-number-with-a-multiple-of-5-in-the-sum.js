const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function magicNumber(n){
    return n % 2 === 0 && (Math.floor(n / 10) + n % 10) % 5 === 0;
}

console.log(magicNumber(n) ? "Yes" : "No");