const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

const OFFSET = 100;
const SIZE = 201;

const tile = Array.from({length: SIZE}, () => Array(SIZE).fill(0));

let RB = 1 // 1: Red, 2: Blue

for(let rect of rectangles){
    for(let i=rect[0]; i<rect[2]; i++){
        const x = i + OFFSET;
        for(let i=rect[1]; i<rect[3]; i++){
            const y = i + OFFSET;
            tile[x][y] = RB;
        }
    }

    if(RB === 1) RB = 2;
    else RB = 1;
}

const result = tile.reduce((pre, cur) => pre + cur.reduce((p,c) => {
    if(c === 2) return p+1;
    return p;
},0), 0)

console.log(result);