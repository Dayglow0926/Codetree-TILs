const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

function check(num){
    if(num % 2 === 0) return false;
    if(num % 10 === 5) return false;
    if(num % 3 === 0 && num % 9 !== 0) return false;

    return true;
}

let count = 0;

for(let i=a; i<=b; i++){
    if(check(i)) count ++;
}

console.log(count);