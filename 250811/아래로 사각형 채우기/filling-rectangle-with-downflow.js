const fs = require("fs");
const number = Number(fs.readFileSync(0).toString().trim());

const arr = Array(number).fill(0).map((n) => Array(number).fill(0));

let count = 1;

for(let i=0; i < arr[0].length; i++){
    for(let j=0; j < arr.length; j++){
        arr[j][i] = count;
        count ++;
    }
}

arr.forEach((a) => console.log(a.join(" ")));

