const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let even = 0;
let odd = 0;

for(let i = 0; i<arr.length; i++){
    if((i+1) % 2 === 0) even += arr[i];
    else odd += arr[i]
}
console.log(Math.abs(even - odd));