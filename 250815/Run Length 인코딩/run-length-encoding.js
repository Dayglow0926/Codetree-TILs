const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim();

let result = '';
let count = 1;

for(let str of givenStr){
    if(result.slice(-1) !== str) {
        result += count + str;
        count = 1;
    }else{
        count++;
    }
}

result = result.slice(1) + count;

console.log(result.length);
console.log(result);
