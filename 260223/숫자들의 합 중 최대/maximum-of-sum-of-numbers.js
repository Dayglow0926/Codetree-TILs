const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.

let max = -1;

for(let i=x; i<=y; i++){
    const sum = Array.from(String(i), Number).reduce((c, p) => c+p, 0);

    max = Math.max(max, sum)
}

console.log(max)