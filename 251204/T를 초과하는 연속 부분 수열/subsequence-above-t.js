const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let cnt = 0;
let result = 0;

for(let i=0; i<n; i++){
    if(arr[i] > t) cnt++;
    else{
        result = Math.max(result, cnt)
        cnt = 0;
    }
}

result = Math.max(result, cnt)

console.log(result);