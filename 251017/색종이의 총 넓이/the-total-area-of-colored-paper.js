const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const SIZE = 100;
const LEN = 8;

const grid = Array.from({length: SIZE}, () => Array(SIZE).fill(0));

let area = 0;

for(let rect of rects){
    for(let i=1; i<=LEN; i++ ){
        for(let j=1; j<=LEN; j++ ){
            if(grid[rect[0]+i][rect[1]+j] === 0){
                grid[rect[0]+i][rect[1]+j] = 1;
                area++;
            }
        }
    }
}

console.log(area);