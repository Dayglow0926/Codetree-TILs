const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.

const mapper = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3
}

const dx = [1,0,0,-1], dy = [0,-1,1,0];
let dirNum = mapper[d];
const location = [r, c];

function inRange(x, y){
    return x > 0 && x <= n && y > 0 && y <= n;
}

for(let i=0; i<t; i++){
    let nx = location[1] + dx[dirNum], ny = location[0] + dy[dirNum];

    if(!inRange(nx, ny)) {
        dirNum = 3 - dirNum;
        continue;
    }

    

    location[0] = ny, location[1] = nx;

}

console.log(location.join(' '));