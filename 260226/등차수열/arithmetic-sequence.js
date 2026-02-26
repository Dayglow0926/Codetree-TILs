const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

// Please Write your code here.

let max = 0;

for (let k = arr[0] + 1; k < arr[arr.length - 1]; k++) {
    let result = 0;

    for (let x = 0; x < arr.length - 1; x++) {
        for (let y = x + 1; y < arr.length; y++) {
            if (arr[y] - k === k - arr[x]) {
                result++;
            }
        }
    }

    max = Math.max(max, result);    
}

console.log(max);