const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function check(str){

    const arr = [];
    for(let s of str){
        if(arr.indexOf(s) === -1) arr.push(s);

        if(arr.length >= 2) return true;
    }

    return false;
}

console.log(check(A) ? "Yes" : "No");
