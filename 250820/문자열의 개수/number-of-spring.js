const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let count = 0;
const result = [];

for(let i in input){
    if(input[i] == '0') break;

    if(i % 2 == 0) result.push(input[i]);
    count++;
}

console.log(count);
console.log(result.join('\n'));