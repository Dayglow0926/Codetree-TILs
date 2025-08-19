const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let result = 0;

for(let str of input){
    if(0 <= str && str <= 9){
        result += Number(str);
    }
}

console.log(result);