const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

const arr = Array(n+1).fill(0);

segments.forEach((segment) => {
    for(let i = segment[0]; i<= segment[1]; i++){
        arr[i]++;
    }
})

console.log(Math.max(...arr));