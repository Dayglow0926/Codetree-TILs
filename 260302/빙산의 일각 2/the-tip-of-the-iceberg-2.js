const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let result = 0;
const maxH = Math.max(...h);


for(let i=0; i<maxH; i++){
    let count = 0
    let check = true;

    for(let j of h){
        if(j > i && check){
            check = false;
            count++;
        }else if(j <= i){
            check = true;
        }
    }
    result = Math.max(count, result);
}

console.log(result);