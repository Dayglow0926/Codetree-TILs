const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

console.log(Number(input[0] + input[1]) + Number(input[1] + input[0]));