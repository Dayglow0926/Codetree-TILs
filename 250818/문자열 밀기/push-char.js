const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('');

const first = input.shift();
console.log(input.join('') + first);