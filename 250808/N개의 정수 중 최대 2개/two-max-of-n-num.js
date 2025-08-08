const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const nums = arr[1].split(" ").map(Number).sort((a,b) => b-a);

console.log([nums[0], nums[1]].join(" "));