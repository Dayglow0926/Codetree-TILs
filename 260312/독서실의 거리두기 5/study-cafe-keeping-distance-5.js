const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// Please Write your code here.
let result = 0;
for(let i=0; i<seat.length; i++){
    if(seat[i] == 1 || seat[i-1] == 1 || seat[i+1] == 1) continue;

    let Llen = 0;
    let Rlen = 0;
    for(let j=1; j<seat.length; j++){
        if(!Rlen && i+j < seat.length && seat[i+j] == 1) Rlen = j;
        if(!Llen && i-j >= 0  && seat[i-j] == 1) Llen = j;

        if(Rlen && Llen) {
            if(Rlen !== Llen) Rlen = 0, Llen = 0;

            break;
        }
    }
    
    result = Math.max(result, Rlen, Llen);
}

console.log(result);