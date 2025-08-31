const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number).sort((a,b) => a - b).join('');
const b = input[2].trim().split(' ').map(Number).sort((a,b) => a - b).join('');

// Please Write your code here.

console.log(a == b ? "Yes" : "No");