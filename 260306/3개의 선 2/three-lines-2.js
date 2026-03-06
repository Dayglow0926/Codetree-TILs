const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const LINE_LIMIT=3;


for(let j=0; j<=LINE_LIMIT; j++){
    let temp = [...points]

    for(let xl=0; xl<LINE_LIMIT-j; xl++){
        const num = temp[0];
        temp = temp.filter((v) => v[0] !== num[0]);
    }

    for(let yl=0; yl<j; yl++){
        const num = temp[0];
        temp = temp.filter((v) => v[1] !== num[1]);
    }

    if(temp.length === 0) {
        console.log(1); 
        return ;
    }
}

console.log(0);
