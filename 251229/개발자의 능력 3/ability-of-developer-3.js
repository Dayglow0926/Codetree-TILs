const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.

let result = Number.MAX_SAFE_INTEGER;

for(let x=0; x<arr.length; x++){
    for(let y=x+1; y<arr.length; y++){
        for(let z=y+1; z<arr.length; z++){
            const sum1 = arr[x] + arr[y] + arr[z];
            const sum2 = arr.reduce((p, c) => p+c ,0) - sum1;

            result = Math.min(result, Math.abs(sum1 - sum2));
        }
    }
}

console.log(result);
