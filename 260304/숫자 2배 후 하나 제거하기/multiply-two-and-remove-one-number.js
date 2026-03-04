const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

let temp = [...arr];
let result = Number.MAX_VALUE;

for(let i=0; i<n; i++){
    temp[i] *= 2;

    for(let j=0; j<n; j++){
        const renewal = temp.filter((_,k)  => k !== j);
        let diff = 0;

        for(let k=0; k<n-2; k++){
            diff += Math.abs(renewal[k] - renewal[k+1]);
        }

        result = Math.min(result, diff);
    }

    temp[i] = arr[i];
}

console.log(result)