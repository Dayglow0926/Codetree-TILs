const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let result = input[0].split('');

for(let str of input[1]){
    switch(str){
        case 'L' : {
            const temp = result.shift();
            result.push(temp);
            break;
        }
        case 'R' : {
            const temp = result.pop();
            result.unshift(temp);
            break;
        }
    }
}

console.log(result.join(''));