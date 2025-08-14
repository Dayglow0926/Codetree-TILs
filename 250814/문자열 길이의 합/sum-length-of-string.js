const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let aCount = 0;
let len = 0;

for (let i = 1; i < input.length; i++) {
    if(input[i][0] === 'a') aCount ++;

    len += input[i].length;
}

console.log(len, aCount);
