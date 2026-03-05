const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
// Please Write your code here.

let result = 0;

for(let i=0; i<c; i++){
    const aNum = a * i;

    if(aNum > c) break;

    for(let j=0; j<c; j++){
        const bNum = b * j;
        if(aNum + bNum <= c){
            result = Math.max(result, aNum + bNum);
        }else{
            break;
        }
    }
}

console.log(result);