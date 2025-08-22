const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function isLeapYear(n) {
    if (n % 100 === 0 && n % 400 !== 0) {
        return false;
    }

    if (n % 4 === 0) {
        return true;
    }

    return false;
}

console.log(isLeapYear(y));