const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function func(a,b){
    const f = a < b ? a + 10 : a * 2;
    const s = b < a ? b + 10 : b * 2;

    return [f, s]
}

[a, b] = func(a,b)

console.log(a,b);