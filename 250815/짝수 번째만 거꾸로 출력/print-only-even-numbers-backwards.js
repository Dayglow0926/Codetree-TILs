const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim().split('');

console.log(givenStr.filter((n,i) => i % 2 === 1).reverse().join(''))