const fs = require("fs")
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let zeroCheck = arr.length;

for(let n in arr){
    if(arr[n] === 0) {
        zeroCheck = n;
        break;
    }
}

const zf = arr.slice(0, zeroCheck);

console.log(zf.reverse().join(" "));
