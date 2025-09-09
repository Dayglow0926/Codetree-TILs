const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

let result = 0;

n.split('').map(Number).forEach((num) => {
    result = result * a + num;
})

const arr = [];

while(true){

    arr.push(result % b);
    if(result < b) break;

    result = Math.floor(result / b);

}

console.log(arr.reverse().join(''));