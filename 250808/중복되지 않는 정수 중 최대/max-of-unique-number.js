const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ");
let map = new Map();

for(let n of nums){
    map.set(n, (map.get(n) || 0) + 1);
}

const nonRepeated = [];
for (const [number, count] of map) {
  if (count === 1) {
    nonRepeated.push(number);
  }
}

console.log(nonRepeated.length > 0 ? Math.max(...nonRepeated) : -1);