const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for(let i = 2; i<10; i++){
    arr.push(arr[i-1] + 2 * arr[i-2]);
}

console.log(arr.join(" "));