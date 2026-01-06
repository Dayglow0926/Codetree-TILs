const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let extentMin = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n; i++){
    let xMin = Number.MAX_SAFE_INTEGER;
    let xMax = Number.MIN_SAFE_INTEGER;
    let yMin = Number.MAX_SAFE_INTEGER;
    let yMax = Number.MIN_SAFE_INTEGER;

    for(let j=0; j<n; j++){
        if(i === j) continue;

        xMin = Math.min(xMin, points[j][0])
        xMax = Math.max(xMax, points[j][0])
        yMin = Math.min(yMin, points[j][1])
        yMax = Math.max(yMax, points[j][1])
    }

    const extent = (xMax - xMin) * (yMax - yMin);

    extentMin = Math.min(extent, extentMin);
}

console.log(extentMin)