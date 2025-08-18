const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let result = input[0];
const len = input[1].length

for(let i=0; i <= result.length - len;){
    const target = result.slice(i,i+len);
    if(target === input[1]){
        result = result.slice(0,i) + result.slice(i+len);
        i = 0;
        continue;
    }
    i++;
}

console.log(result);