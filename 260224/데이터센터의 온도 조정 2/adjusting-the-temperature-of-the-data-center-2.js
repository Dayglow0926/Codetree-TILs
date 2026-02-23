const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
let tMin = 1000, tMax = 0;

for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    ta.push(taValue);
    tMin = Math.min(tMin, taValue);

    tb.push(tbValue);
    tMax = Math.max(tMax, tbValue);
}

// Please Write your code here.

let max = -1;

for(let i=tMin-1; i<=tMax; i++){
    let sum = 0;

    for(let j=0; j<ta.length; j++){
        if(i < ta[j]){
            sum += c;
        }else if(i > tb[j]){
            sum += h;
        }else{
            sum += g;
        }
    }

    max = Math.max(max, sum);
}

console.log(max);