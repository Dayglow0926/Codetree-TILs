const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function check(nx, ny){
    return nx >= 0 && nx < m && ny >= 0 && ny < n;
}

const arr = Array.from({length: n}, () => Array.from({length: m},() => 0))
let dirNum = 0;
const dx = [0, 1, 0, -1] , dy = [1, 0, -1, 0]
let x = 0, y = 0;

arr[x][y] = 1;

for(let i=2; i<=n*m; i++){
    const nx = x + dx[dirNum], ny = y + dy[dirNum];

    if(!check(nx, ny) || arr[ny][nx] !== 0){
        dirNum = (dirNum + 1) % 4;
    }

    x += dx[dirNum];
    y += dy[dirNum];

    arr[y][x] = i;
}

arr.forEach((v) => console.log(v.join(' ')))

