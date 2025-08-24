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

if(o === '+') console.log(`${a} ${o} ${c} = ${add(a,c)}`);
else if(o === '-') console.log(`${a} ${o} ${c} = ${minus(a,c)}`);
else if(o === '*') console.log(`${a} ${o} ${c} = ${mul(a,c)}`);
else if(o === '/') console.log(`${a} ${o} ${c} = ${div(a,c)}`);
else console.log("False");

