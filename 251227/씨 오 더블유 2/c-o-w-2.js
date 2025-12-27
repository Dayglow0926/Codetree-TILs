const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1].split('');

// Please Write your code here.

let count = 0;

for(let c=0; c<string.length; c++){
    if(string[c] !== 'C') continue;

    for(let o=c+1; o<string.length; o++){
        if(string[o] !== 'O') continue;

        for(let w=o+1; w<string.length; w++){
            if(string[w] !== 'W') continue;
            count++;
        }
    }
}

console.log(count);