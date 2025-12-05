const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
let timeA = 0;
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    timeA += Number(t);
    movesA.push([d, Number(t)]);
}
const movesB = [];
let timeB = 0;
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    timeB += Number(t);
    movesB.push([d, Number(t)]);
}

// Please Write your code here.
const max = Math.max(timeA, timeB);
const arr = Array.from({length: max+1}, () => [0,0]);

let cur = 0;
let sec = 0;

for(let i=0; i<movesA.length; i++){
    for(let j=0; j<movesA[i][1]; j++){
        sec++;
        if(movesA[i][0] === 'R') arr[sec][0] = ++cur;
        else arr[sec][0] = --cur;
    }
}

cur = 0;
sec = 0;

for(let i=0; i<movesB.length; i++){
    for(let j=0; j<movesB[i][1]; j++){
        sec++;
        if(movesB[i][0] === 'R') arr[sec][1] = ++cur;
        else arr[sec][1] = --cur;
    }
}

console.log(arr.findIndex((v, i) => i>0 && v[0] === v[1]));