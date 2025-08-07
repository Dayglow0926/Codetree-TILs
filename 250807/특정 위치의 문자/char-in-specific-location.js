const arr = ["L","E","B","R","O","S"];

const fs = require("fs"); 
const str = fs.readFileSync(0).toString().trim();

console.log(arr.indexOf(str) !== -1 ? arr.indexOf(str) : "None");