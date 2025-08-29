const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

function f(arr){
    const result = arr[0] * arr[1] * arr[2];

    return result.toString().split('').map(Number).reduce((p,c) => p + c,0)
}

console.log(f([a,b,c]));