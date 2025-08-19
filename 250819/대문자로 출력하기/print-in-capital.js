const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const result = []

for(let str of input){
    const code = str.charCodeAt(0);
    if(code >= 65 && code <= 90){
        result.push(str);
    }else if(code >= 97 && code <= 122){
        result.push(str.toUpperCase());
    }
}

console.log(result.join(''));