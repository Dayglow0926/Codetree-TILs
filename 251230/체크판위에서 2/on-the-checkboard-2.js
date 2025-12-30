const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.

let count = 0;
//row, col, color
let color = grid[0][0];
const now = [0,0]

if(grid[0][0] === grid[R-1][C-1]){
    console.log(0);
    return;
}

for(let row=1; row<R; row++){
    for(let col=1; col<C; col++){
        if(grid[0][0] !== grid[row][col]){
            for(let row2=row+1; row2<R-1; row2++){
                for(let col2=col+1; col2<C-1; col2++){
                    if(grid[row][col] !== grid[row2][col2]){
                        count++;
                    }
                }
            }
        }
    }
}

console.log(count);