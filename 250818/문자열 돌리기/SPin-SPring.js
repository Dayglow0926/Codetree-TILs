const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('');

for(let i in input){
    console.log(input.join(''));
    const pop = input.pop();
    input.unshift(pop);
}

console.log(input.join(''));