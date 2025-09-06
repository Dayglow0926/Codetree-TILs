const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0].split('').map(Number);

// Please Write your code here.

let result = 0;

binaryStr.forEach((n) => {
    result = result * 2 + n;
})

console.log(result);