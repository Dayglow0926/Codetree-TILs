const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const result = input.slice(1).reduce((p,c) => p+c,0).toString().split('');

const temp = result.shift();
result.push(temp)

console.log(result.join(''));

