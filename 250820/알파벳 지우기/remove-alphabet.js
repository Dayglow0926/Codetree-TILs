const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let string = '';
let result = 0;

for(let str of input){
  for(let s of str){
    if(s <= '9' && s >= '0') string += s;
  }

  result += Number(string);
  string = '';
}

console.log(result);

