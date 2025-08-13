const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n').map((n) => n.replaceAll(" ", "")).join('');
console.log(input);
