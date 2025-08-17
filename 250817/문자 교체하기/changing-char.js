const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

console.log(input[0].slice(0,2) + input[1].slice(2,))