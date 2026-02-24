const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

// Please Write your code here.
let result = 0;

for(let i=x; i<=y; i++){
    const arr = Array.from(String(i), Number).sort((a,b) => a-b);

    let count = 0;

    for(let j=1; j<arr.length; j++){
        if(arr[j-1] !== arr[j]){
            count++;
        }

        if(count > 1) break;
    }
    
    if(count === 1) {
        result++;
    }
}

console.log(result);