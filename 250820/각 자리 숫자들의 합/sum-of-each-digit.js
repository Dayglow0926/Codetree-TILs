const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('').map(Number);

console.log(input.reduce((p,c) => p+c,0));