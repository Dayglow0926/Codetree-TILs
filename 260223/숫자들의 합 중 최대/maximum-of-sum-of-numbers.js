const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.

let max = -1;

for(let i=x; i<=y; i++){
    const arr = Array.from(String(i), Number);

    if(arr.length<2){
        max = Math.max(max, i);
        continue;
    }

    for(let a=0; a<arr.length; a++){
        for(let b=a+1; b<arr.length;b++){
            let sum = arr[a] + arr[b];

            max = Math.max(max, sum);
        }
    }
}

console.log(max)