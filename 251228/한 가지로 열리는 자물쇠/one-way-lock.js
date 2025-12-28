const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let count = 0;

for(let x=1; x<=n; x++){
    for(let y=1; y<=n; y++){ 
        for(let z=1; z<=n; z++){ 
            if(Math.abs(a-x) <= 2){
                count++;
            }else if(Math.abs(b-y) <= 2){
                count++;
            }else if(Math.abs(c-z) <= 2){
                count++;
            }
        }
    }
}

console.log(count);