const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const sums = input.slice(1).map(Number)

// Please Write your code here.

let result = 0;
let max = 0;

for(let i=0; i<sums.length; i++){
    let len = 0, count = 0;

    for(let j=i+1; j<sums.length; j++){
        len++;
        if(len > k){
            break;
        }
        if(sums[j] === sums[i]){
            count++;
        }
    }

    if(max < count){
        result = sums[i];
        max = count;
    }
}

console.log(result);