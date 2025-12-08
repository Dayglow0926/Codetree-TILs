const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n).map((v) => v.split(" ").map((v) => isNaN(v) ? v : Number(v)));
const movesB = input.slice(1 + n, 1 + n + m).map((v) => v.split(" ").map((v) => isNaN(v) ? v : Number(v)));

// Please Write your code here.
const time = Math.max(movesA.reduce((p, c) => p + Number(c[0]),0), movesB.reduce((p, c) => p + Number(c[0]),0));
const arr = Array.from({length: time+1}, () => [0,0])

let curT = 0;

for(const move of movesA){
    for(let i=1; i <= move[0]; i++){
        arr[curT + i][0] = arr[curT + i - 1][0] + (move[1] === 'R' ? 1 : -1)
    }
    curT += move[0];
}

for(let i=curT+1; i<=time; i++){
    arr[i][0] = arr[i-1][0];
}

curT = 0;

for(const move of movesB){
    for(let i=1; i <= move[0]; i++){
        arr[curT + i][1] = arr[curT + i - 1][1] + (move[1] === 'R' ? 1 : -1)
    }
    curT += move[0];
}

for(let i=curT+1; i<=time; i++){
    arr[i][1] = arr[i-1][1];
}

let cross = true;
let count = 0;

arr.forEach((v, i) => {
    if(v[0] === v[1] && !cross) {
        count ++;
        cross = true;
        return ;
    }

    if(v[0] !== v[1]) cross = false;
})

console.log(count);