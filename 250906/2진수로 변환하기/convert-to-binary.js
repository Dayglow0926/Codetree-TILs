const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let number = n;
const result = [];

while(true){
    result.push(number % 2);

    if(number <= 1) break;

    number = Math.floor(number / 2);
}

console.log(result.reverse().join(''));