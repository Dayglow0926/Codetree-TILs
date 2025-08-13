const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const len1 = input[0].length;
const len2 = input[0].replaceAll(input[1],'').length;

console.log(len1 - len2);