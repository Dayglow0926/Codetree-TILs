const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.
function add(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

function mul(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

if(o === '+') console.log(add(a,b));
else if(o === '-') console.log(minus(a,b));
else if(o === '*') console.log(mul(a,b));
else if(o === '/') console.log(div(a,b));
else console.log("False");

