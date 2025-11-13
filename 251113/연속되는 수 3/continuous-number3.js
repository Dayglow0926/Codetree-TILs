const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let result = 0;
let cnt = 0;

for(let num of arr){
    if(num < 0){
        if(cnt > 0){
            result = result < Math.abs(cnt) ? Math.abs(cnt) : result;
            cnt = 0;
        }
        cnt --;
    }else{
        if(cnt < 0){
            result = result < Math.abs(cnt) ? Math.abs(cnt) : result;
            cnt = 0;
        }
        cnt ++;
    }
}

result = result < Math.abs(cnt) ? Math.abs(cnt) : result;

console.log(result);