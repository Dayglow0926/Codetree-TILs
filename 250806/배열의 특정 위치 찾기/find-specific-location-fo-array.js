const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let even = 0;
const odd = [0,0]

for(let i=0; i<arr.length; i+=1){
    if(i % 2) even += arr[i];
    if(!(arr[i] % 3)) {
        odd[0] += arr[i];
        odd[1]++;
    }
}

console.log(even, (odd[0] / odd[1]).toFixed(1))