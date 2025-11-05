const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
if(arr.length <= 1){
    console.log(1);
    return ;
}

let result = 0;
let cnt = 0;

for(let i=1; i<arr.length; i++){
    if(arr[i-1] !== arr[i]){
        if(result < cnt) result = cnt + 1;
        cnt = 0;
    }else{
        cnt++;
    }
}

if(result < cnt) result = cnt + 1;

console.log(result);