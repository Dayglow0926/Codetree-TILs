const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const OFFSET = 100
const SIZE = 201;
const LEN = 8;

const grid = Array.from({length: SIZE}, () => Array(SIZE).fill(0));

let area = 0;

for(let rect of rects){
    const x = rect[0]+OFFSET, y = rect[1]+OFFSET;

    for(let i=1; i<=LEN; i++ ){
        for(let j=1; j<=LEN; j++ ){
            if(grid[x+i][y+j] === 0){
                grid[x+i][y+j] = 1;
                area++;
            }
        }
    }
}

console.log(area);