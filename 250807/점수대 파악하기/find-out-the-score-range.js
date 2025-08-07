const fs = require("fs")
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const stack = Array(10).fill(0);

for(let num of arr){
    if(num === 0) break;
    stack[parseInt(num / 10) -1]++;
}

for(let i = 9; i>=0; i--){
    console.log(`${i+1}0 - ${stack[i]}`)
}
