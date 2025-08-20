const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const q = input[0].split(' ');

let count = 0;
for(let i=1; i<=q[0]; i++){
    if(input[i] === q[1]) count ++;
}

console.log(count);