const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

function indexOf(text, pattern){
    const length = text.length - pattern.length
    for(let i=0; i<=length; i++){
        const str = text.slice(i, i+pattern.length);
        if(str === pattern) return i;
    }

    return -1;
}

console.log(indexOf(text, pattern));