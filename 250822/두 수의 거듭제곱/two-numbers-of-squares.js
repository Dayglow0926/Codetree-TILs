const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 

function power(a,b){
    let result = a;
    for(let i=2; i<=b; i++){
        result *= a;
    }

    return result;
}

console.log(power(a,b));