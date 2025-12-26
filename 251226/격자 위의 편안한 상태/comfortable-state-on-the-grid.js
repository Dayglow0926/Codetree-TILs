const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

// Please Write your code here.

const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];

function inRange(x, y){
    return x >= 0 && n >= x && y >= 0 && y <= n; 
}

const arr = Array.from({length: n+1}, (v) => Array.from({length: n+1}, (v) => 0));

for(let i=0; i<m; i++){
    let x = moves[i][1], y = moves[i][0];
    arr[y][x] = 1;

    let count = 0;
    for(let j=0; j<4; j++){
        const nx = x + dx[j], ny = y + dy[j];

        if(inRange(nx, ny)){
            count += arr[ny][nx];
        }
    }

    console.log(count === 3 ? 1 : 0)
}