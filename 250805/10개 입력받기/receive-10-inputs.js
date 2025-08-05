const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0;
let count = 0;

for(let n of arr){
    if(n === 0) break;

    sum += n;
    count++;
}

console.log(sum, (sum / count).toFixed(1) );

