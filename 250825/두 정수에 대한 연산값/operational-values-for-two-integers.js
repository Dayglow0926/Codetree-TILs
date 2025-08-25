const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function func(a,b){
    const f = a > b ? a + 25 : a * 2;
    const s = b > a ? b + 25 : b * 2;

    return [f, s]
}

[a, b] = func(a,b)

console.log(a,b);