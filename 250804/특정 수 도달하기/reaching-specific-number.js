const fs = require("fs")
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let index = 0;

for(let i in arr){
    if(arr[i] >= 250) {
        index = i;
        break;
    }
}

const sum = arr.slice(0,index).reduce((pre, cur)=> pre + cur,0)

console.log(sum, (sum / index).toFixed(1));




