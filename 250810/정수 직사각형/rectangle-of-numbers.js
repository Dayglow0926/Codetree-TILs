const fs = require("fs");
const arr2d = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const result = Array(arr2d[0]).fill(0).map(() => Array(arr2d[1]).fill(0));

let count = 1;

for(let i=0; i<result.length; i++){
    for(let j=0; j<result[i].length; j++){
        result[i][j] = count;
        count++;
    }
    console.log(result[i].join(" "))
}