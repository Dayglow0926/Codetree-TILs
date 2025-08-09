const fs = require("fs");
const arr2 = fs.readFileSync(0).toString().trim().split("\n");

let end = 1;
let sum = 0;

for(let arr of arr2){
    const v = arr.split(" ").map(Number).slice(0, end).reduce((pre, cur) => pre + cur,0);

    sum += v
    end++;
}

console.log(sum);