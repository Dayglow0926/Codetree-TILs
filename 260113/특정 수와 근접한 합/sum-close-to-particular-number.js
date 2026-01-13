const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let min = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        const sum = arr.filter((_,index) => i !== index && j !== index).reduce((p,c) => p+c, 0);
        min = Math.min(min, Math.abs(s-sum));
    }
}

console.log(min)