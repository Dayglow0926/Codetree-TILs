const fs = require("fs"); 
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const end = arr.indexOf(999) === -1 ? arr.indexOf(-999) : arr.indexOf(999);

const filter = arr.slice(0, end);

console.log([Math.max(...filter), Math.min(...filter)].join(" "));