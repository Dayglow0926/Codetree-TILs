const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.

const OFFSET = 1000;
const SIZE = 2001;

const grid = Array.from({length: SIZE}, () => Array(SIZE).fill(0));
const rect = [rectA, rectB];

let area = 0;

for(const [x1, y1, x2, y2] of rect){
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

const [x1, y1, x2, y2] = rectM;

const ax = x1 + OFFSET, bx = x2 + OFFSET;
const ay = y1 + OFFSET, by = y2 + OFFSET;

for(let i=ax; i<bx; i++){
    for(let j=ay; j<by; j++){
        if(grid[i][j] === 1){
            grid[i][j] = 0;
            area--;
        }
    }
}


console.log(area);