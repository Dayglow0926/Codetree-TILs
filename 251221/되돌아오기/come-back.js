const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1).map((v) => v.split(' '));
// Please Write your code here.

const move = {
    'N':2,
    'E':0,
    'S':1,
    'W':3,
}

const dx = [1, 0, 0, -1], dy = [0, 1, -1, 0]

const now = [0,0];
let totalTime = 0;

for(let i=0; i<n; i++){
    const time = Number(moves[i][1]);
    const m = moves[i][0];

    for(let t=0; t<time; t++){        
        totalTime++;

        now[0] += dy[move[m]], now[1] += dx[move[m]]

        if(!now[0] && !now[1]){
            console.log(totalTime);
            return ;
        }
    }
}

console.log(-1);