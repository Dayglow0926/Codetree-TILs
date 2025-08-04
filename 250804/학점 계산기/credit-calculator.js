const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];
const arr = input[1].split(" ").map(Number);

const ave = (arr.reduce((a,b) => a + b, 0) / n).toFixed(1);

console.log(ave);
console.log(ave >= 4.0 ? "Perfect" : ave >= 3.0 ? "Good" : "Poor");