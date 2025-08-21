const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

let count = 0;

function printLine(N){
    const arr = []
    for(let i=0; i<N; i++){
        count ++;
        arr.push(count);
        if(count === 9) count = 0;
    }
    console.log(arr.join(' '));
}

for(let i=0; i<N; i++){
    printLine(N);
}