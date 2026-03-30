const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const sums = input.slice(1).map(Number)

// Please Write your code here.

const max = Math.max(...sums);
const result = [];

for(let i=0; i<=max; i++){
    let boom = 0;
    let count = 0;

    for(let j=0; j<sums.length; j++){
        boom ++;
        if(sums[j] === i && boom <= k){
            boom = 0;
            count++;
        }
    }

    result.push(count);
}

console.log(result.indexOf(Math.max(...result)));