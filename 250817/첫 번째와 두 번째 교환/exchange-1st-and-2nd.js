const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const TARGET = [input[0], input[1]];

const result = []

for(let s of input){
    if(s === input[0]) result.push(input[1]);
    else if(s === input[1]) result.push(input[0]);
    else result.push(s)
}

console.log(result.join(''));
