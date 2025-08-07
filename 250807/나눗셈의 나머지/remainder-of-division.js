const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const stack = Array(10).fill(0);

while(arr[0]>1){
    const v = parseInt(arr[0] / arr[1]);
    const n = arr[0] % arr[1];

    arr[0] = v;
    stack[n]++;
}

console.log(stack.reduce((p, c) => p + c**2, 0));