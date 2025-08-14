const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

console.log(input.reverse().join('\n'));

