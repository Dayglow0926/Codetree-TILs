const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.

function printLine(m){
    const arr = Array(m).fill(1)
    console.log(arr.join(''));
}

for(let i=0; i<n; i++){
    printLine(m);
}