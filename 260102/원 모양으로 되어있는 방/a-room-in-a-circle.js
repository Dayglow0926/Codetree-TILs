const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.

let min = Number.MAX_SAFE_INTEGER;

for(let i=1; i<=n; i++){
    let sum = 0;
    for(let j=0; j<n; j++){
        let index = (i-1+j) % n;
        let m = arr[index] * j;

        sum += m;
    }
    min = Math.min(sum, min);
}

console.log(min);