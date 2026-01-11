const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.

function check(nx, ny){
    return nx >= n || nx < 0 || ny >= n || ny < 0;
}

const dx = [0, 1, 0, -1], dy = [-1, 0, 1, 0];
let dirNum = 0;

let x = Math.floor(n/2), y = Math.floor(n/2);

let sum = board[y][x];

for(let i=0; i<t; i++){
    if(commands[i] === 'R'){
        dirNum = (dirNum + 1) % 4
        continue;
    }else if(commands[i] === 'L'){
        dirNum = (dirNum - 1) === -1 ? 3 : (dirNum - 1);
        continue;
    }

    const nx = x + dx[dirNum], ny = y + dy[dirNum];

    if(check(nx, ny)){
        continue;
    }

    x += dx[dirNum];
    y += dy[dirNum];

    sum += board[y][x];
}

console.log(sum);