const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0].split('');

// Please Write your code here.

let count = 0;

for(let i=0; i<A.length; i++){
    if(A[i] === ')') continue;

    const close = A.slice(i).filter((v) => v===')');

    count += close.length;
}

console.log(count);