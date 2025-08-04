const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log((arr.reduce((a,b)=> a+b,0) / 8).toFixed(1));