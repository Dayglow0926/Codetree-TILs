const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

console.log([a,b,c].sort((a,b) => a-b)[0]);