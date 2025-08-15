const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim().split('\n');

const count = Number(givenStr[1]);
const str = givenStr[0].split('').reverse().slice(0, count);

console.log(str.join(''));
