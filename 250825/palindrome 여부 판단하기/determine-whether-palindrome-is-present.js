const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function palindromeCheck(_str){

    const arr = _str.split('').reverse();
    return arr.join('') === str;

}

console.log(palindromeCheck(str) ? "Yes" : "No");

