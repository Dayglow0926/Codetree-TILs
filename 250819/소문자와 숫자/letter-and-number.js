const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let result = '';

for(let str of input){
    if((0 <= str && str <= 9) || ('a' <= str && str <= 'z' )){
        result += str;
    }else if('A' <= str && str <= 'Z'){
        result += str.toLowerCase();
    }
}

console.log(result);