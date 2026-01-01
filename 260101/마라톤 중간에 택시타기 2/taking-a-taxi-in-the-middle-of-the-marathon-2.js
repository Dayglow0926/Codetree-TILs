const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

// Please Write your code here.

let minTotal = Number.MAX_SAFE_INTEGER;

for(let i=1; i<arr.length-1; i++){
    let total = 0;
    let p = 0;

    for(let j=1; j<arr.length; j++){
        if(i === j) continue;

        const len = Math.abs(arr[p][0] - arr[j][0]) + Math.abs(arr[p][1] - arr[j][1]);
        total += len;

        p = j;
    }

    minTotal = Math.min(minTotal, total);
}

console.log(minTotal);
