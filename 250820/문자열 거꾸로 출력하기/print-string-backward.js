const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').filter(n => n!=='END');

for(let str of input){
    console.log(str.split('').reverse().join(''));
}