const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

const A = a * 60 + b;
const B = c * 60 + d;

console.log(B-A);