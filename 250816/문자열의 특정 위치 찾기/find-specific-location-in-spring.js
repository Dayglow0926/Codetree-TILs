const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const index = input[0].indexOf(input[1]);
console.log(index > -1 ? index : 'No' );