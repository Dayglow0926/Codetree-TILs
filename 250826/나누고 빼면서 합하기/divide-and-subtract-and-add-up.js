const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

function calc(m){

    let result = 0;

    while(m >= 1){

        result += A[m-1];

        if(m % 2 === 0) m = m / 2;
        else m -= 1;
    }

    return result;

}

console.log(calc(m));