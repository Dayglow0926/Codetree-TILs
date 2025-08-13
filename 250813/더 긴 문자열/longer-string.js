const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

if(input[0].length === input[1].length) console.log("same");
else if (input[0].length > input[1].length) console.log(input[0],input[0].length);
else console.log(input[1],input[1].length);