const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let result = '';

for(let str of input){
    if('a' <= str && str <= 'z' ){
        result += str.toUpperCase();
    }else if('A' <= str && str <= 'Z'){
        result += str.toLowerCase();
    }
}

console.log(result);