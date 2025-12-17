const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1).map((v) => v.split(' '));

// Please Write your code here.

const location = [0,0]
moves.forEach((v) => {
    if(v[0] === 'N') location[1] += Number(v[1])
    else if(v[0] === 'E') location[0] += Number(v[1])
    else if(v[0] === 'S') location[1] -= Number(v[1])
    else if(v[0] === 'W') location[0] -= Number(v[1])
})

console.log(location.join(' '));