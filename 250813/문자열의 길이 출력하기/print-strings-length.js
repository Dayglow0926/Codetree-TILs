const fs = require("fs");
let givenInput = fs.readFileSync(0).toString().trim().split('\n').join("");
console.log(givenInput.length);