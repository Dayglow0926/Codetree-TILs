const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

const arr = Array.from({length: n}, () => Array.from({length: n}, () => 0));
const dx = [0, -1, 0, 1], dy = [-1, 0, 1, 0];
let dirNum = 3;
let f = Math.floor(n/2);
arr[f][f] = 1;

let x = f, y = f;
let mr = x, pr = y;
let sq = 1;

for(let i = 2; i<=n*n; i++){
    if((sq * sq) < i){
        x += 1;
        sq += 2;

        mr -= 1;
        pr += 1;

        dirNum = (dirNum+1) % 4;

        arr[y][x] = i;
        continue;
    }

    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if(nx < mr || nx > pr || ny < mr || ny > pr){
        dirNum = (dirNum+1) % 4;
    }

    x += dx[dirNum];
    y += dy[dirNum];

    arr[y][x] = i;
}

arr.forEach(v => console.log(v.join(' ')))
