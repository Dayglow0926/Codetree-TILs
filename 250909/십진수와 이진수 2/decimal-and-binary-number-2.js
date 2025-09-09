const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 

let result = 0;

binaryInput.split('').map(Number).forEach((n) => {
    result = result * 2 + n;
})

result *= 17;

const arr = [];

while(true){

    arr.push(result % 2);
    if(result < 2) break;

    result = Math.floor(result / 2);

}

console.log(arr.reverse().join(''));