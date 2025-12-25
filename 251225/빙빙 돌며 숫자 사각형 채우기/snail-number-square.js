const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];
const arr = Array.from({length: n}, (v) => Array.from({length: m}, (v) => 0))

let x = 0, y = 0;
let dirNum = 0;

function inRange(x, y){
    return x >= 0 && x < m && y >= 0  && y < n;
}

arr[y][x] = 1;

for(let i=2; i<=n*m; i++){
    let nx = x + dx[dirNum], ny = y + dy[dirNum];

    if(!inRange(nx, ny) || arr[ny][nx] !== 0){
        dirNum =(dirNum + 1) % 4;
    }

    x += dx[dirNum];
    y += dy[dirNum];

    arr[y][x] = i;
}

arr.forEach((v) => console.log(v.join(' ')));