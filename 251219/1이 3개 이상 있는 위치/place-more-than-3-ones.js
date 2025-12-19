const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];

let count = 0;

for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        let sum = 0;
        for(let d=0; d<4; d++){
            const ny = i + dy[d], nx = j + dx[d];
            if(ny < 0 || ny >= grid.length) continue;

            if(grid[ny][nx]) sum++;
        }
        if(sum >= 3) count++;
    }
}

console.log(count);