const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let len = Number.MAX_SAFE_INTEGER;

for(let i=0; i<points.length; i++){
    for(let j=i+1; j<points.length; j++){
        let x = (points[i][0] - points[j][0])**2;
        let y = (points[i][1] - points[j][1])**2;

        len = Math.min((x+y), len);
    }  
}

console.log(len)