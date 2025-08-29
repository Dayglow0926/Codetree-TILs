const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
let count = 0;
function f(n){
    if(n === 1) return;

    count ++;
    if(n % 2 === 0) f(parseInt(n/2))
    else f(n * 3 +1);
}
f(n);

console.log(count);