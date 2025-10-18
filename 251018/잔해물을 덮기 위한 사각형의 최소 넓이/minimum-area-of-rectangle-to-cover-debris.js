const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

const OFFSET = 1000;
const SIZE = 2001;

const tile = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

let area = 0;

for(let i=rect1[0]; i<=rect1[2]; i++){
    const x = i + OFFSET;
    for(let i=rect1[1]; i<=rect1[3]; i++){
        const y = i + OFFSET;
        tile[x][y] = 1;
        area++;
    }
}

for(let i=rect2[0]; i<=rect2[2]; i++){
    const x = i + OFFSET;
    for(let i=rect2[1]; i<=rect2[3]; i++){
        const y = i + OFFSET;
        if(tile[x][y] === 1){
            tile[x][y] = 0;
            area--;
        }
    }
}

const tile2 = [0,0,0,0]
const check = [false, false] 
let checkArea = 0;

for(let i=0; i<tile.length; i++){
    for(let j=0; j<tile[i].length; j++){
        if(!check[0] && tile[i][j] === 1){
            tile2[0] = i;
            tile2[1] = j;
            check[0] = true;
        }

        if(tile[i][j] === 1) checkArea++;

        if(checkArea === area) {
            tile2[2] = i;
            tile2[3] = j;
            check[1] = true;
            break;
        }
   }
   if(check[0] && check[1]) break;
}

let result = Math.abs(tile2[2] - tile2[0]) * Math.abs(tile2[3] - tile2[1]);

console.log(result);