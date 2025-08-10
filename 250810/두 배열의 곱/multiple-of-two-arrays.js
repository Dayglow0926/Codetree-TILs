const fs = require("fs");
const arr2d = fs.readFileSync(0).toString().trim().split("\n");

const index = arr2d.indexOf("");

const arr1 = arr2d.slice(0, index).map((n) => n.split(" ").map(Number));
const arr2 = arr2d.slice(index+1).map((n) => n.split(" ").map(Number));

for(let i=0; i<arr1.length; i++){
    const result = []
    for(let j=0; j<arr1[0].length; j++){
        result.push(arr1[i][j] * arr2[i][j]);
    }
   console.log(result.join(" "));
}




