const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split("\n");

const a = arr[1].replaceAll(" ","");
const b = arr[2].replaceAll(" ","");

console.log(a.indexOf(b) !== -1 ? "Yes" : "No");

