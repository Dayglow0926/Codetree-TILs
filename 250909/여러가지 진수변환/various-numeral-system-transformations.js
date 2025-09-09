const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.
const result = [];

while(true){
    result.push(n % b);
    if(n < b) break;

    n = Math.floor(n / b);
}

console.log(result.reverse().join(''));
