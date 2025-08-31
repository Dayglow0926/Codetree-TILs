const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = [...input[0]].sort().join('');
const str2 = [...input[1]].sort().join('');

// Please Write your code here.

console.log(str1 == str2 ? "Yes" : "No");
