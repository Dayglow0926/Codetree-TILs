const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const target = input[input.length-1];
let count = 0;

for (let i = 0; i < input.length-1; i++) {
    if(input[i][input[i].length-1] === target) {
        console.log(input[i]);
        count ++;
    }
}

if(count === 0) console.log('None')
