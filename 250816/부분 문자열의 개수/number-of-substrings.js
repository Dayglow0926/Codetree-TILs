const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let count = 0;
let pos = 0; 

while (true) {
    const index = input[0].indexOf(input[1], pos);
    
    if (index === -1) {
        break;
    }
    
    count++;
    pos = index + 1; 
}

console.log(count);