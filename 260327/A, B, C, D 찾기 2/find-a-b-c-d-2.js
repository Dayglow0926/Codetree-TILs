const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number).sort((a,b) => a-b);
// Please Write your code here.

const [a,b] = numbers.splice(0,2);

numbers.splice(numbers.indexOf(a+b), 1);
const [c] = numbers.splice(0,1);

const d = numbers[numbers.length-1] - (a + b + c);

console.log(a,b,c,d)
