const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.

let check = [arr[0]];
let result = 0;

for(let i=1; i<n; i++){
    if(arr[i-1] < arr[i]) check.push(arr[i]);
    else {
        result = check.length > result ? check.length : result ;
        check = [arr[i]];
    }
}

if(arr[n-2] < arr[n-1]) check.push(arr[i]);

result = check.length > result ? check.length : result ;

console.log(result);
