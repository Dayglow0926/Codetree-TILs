const fs = require("fs")
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for(let i in arr){
    if(arr[i] % 3 === 0){
        console.log(arr[i-1]);
        break;
    }
}