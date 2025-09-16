const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const OFFSET = 100;
const SIZE = 201;

const grid = Array.from({length: SIZE}, () => Array(SIZE).fill(0));

let area = 0;

for(const [x1, y1, x2, y2] of rects){
    const ax = x1 + OFFSET, bx = x2 + OFFSET;
    const ay = y1 + OFFSET, by = y2 + OFFSET;

    for(let i=ax; i<bx; i++){
        for(let j=ay; j<by; j++){
            if(grid[i][j] === 0){
                grid[i][j] = 1;
                area++;
            }
        }
    }
}

console.log(area);