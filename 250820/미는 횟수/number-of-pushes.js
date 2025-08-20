const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let result = 0;
const arr = input[0].split('');

for(let i=0; i<arr.length; i++){
    if(arr.join('') == input[1]) break;

    const pop = arr.pop();
    arr.unshift(pop);
    result++;
}

console.log(arr.join('') == input[1] ? result : -1);