const fs = require("fs");
const arr2d = fs.readFileSync(0).toString().trim().split("\n");

const nm = arr2d[0].split(" ").map(Number);

const arr1 = arr2d.slice(1, nm[0]+1).map((n) => n.split(" ").map(Number));
const arr2 = arr2d.slice(nm[0]+1).map((n) => n.split(" ").map(Number));

for(let i=0; i<arr1.length; i++){
    const result = []
    for(let j=0; j<arr1[0].length; j++){
        result.push(arr1[i][j] === arr2[i][j] ? 0 : 1);
    }
   console.log(result.join(" "));
}
