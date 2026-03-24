const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number).sort((a,b) => a-b);

// Please Write your code here.
let result = 0;

for(let i=0; i<n; i++){
    const count = arr.filter((n) => n - arr[i] <= k && n - arr[i]>=0);
    result = Math.max(result, count.length);
}

console.log(result);
