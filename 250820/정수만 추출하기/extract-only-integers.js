const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let idx = 0;
let result = 0;

for(let str of input){
  for(let s of str){
    if(s <= '9' && s >= '0') idx++;
    else break;
  }

  result += Number(str.slice(0, idx));
  idx = 0;
}

console.log(result);


