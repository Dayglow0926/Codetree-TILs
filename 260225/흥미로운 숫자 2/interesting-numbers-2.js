const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

// Please Write your code here.
let result = 0;

for(let i=x; i<=y; i++){
    const set = [...new Set(Array.from(String(i), Number))];

    if(set.length !== 2) continue;

    const arr = Array.from(String(i), Number);

    let aCount = arr.filter((i) => i === set[0]);
    let bCount = arr.filter((i) => i === set[1]);

    if( aCount.length >= 2 && bCount.length >= 2){
        continue;
    }

    result ++;
    
}

console.log(result);