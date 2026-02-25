const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const snData = input.slice(1, 1 + t).map(line => line.split(' ')).sort((a, b) => Number(a[1]) - Number(b[1]));
// Please Write your code here.

let result = 0;

for(let i=a; i<=b; i++){
    let slen = Number.MAX_VALUE, nlen = Number.MAX_VALUE;

    for(let data of snData){
        if(data[0] === 'S'){
            slen = Math.min(Math.abs(i - Number(data[1])), slen);
        }else if(data[0] === 'N'){
            nlen = Math.min(Math.abs(i - Number(data[1])), nlen);
        }
    }

    if(slen <= nlen) result++;
}

console.log(result);