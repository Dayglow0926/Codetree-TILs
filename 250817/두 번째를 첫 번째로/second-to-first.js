const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('');

const result = []

for(let str of input){
    if(input[1] === str) result.push(input[0]);
    else result.push(str)
}

console.log(result.join(''))