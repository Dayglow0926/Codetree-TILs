const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.

function mul(n){
    if(n < 1) return 0;

    return (n % 10) ** 2 + mul(parseInt(n / 10));
}

console.log(mul(n));