const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const num = (input[0] + input[1]).toString();

console.log(num.split('').filter(n => n == '1').length)

