const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0].split('');
// Please Write your code here.

const move = {
    'L' : -1,
    'R' : 1,
}

const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
let dirNum = 0;

const loc = [0, 0];
let count = 0;

for(let comm of commands){
    if(comm === 'F'){
        loc[0] += dy[dirNum], loc[1] += dx[dirNum];
    }else{
        dirNum += move[comm];

        if(dirNum < 0) dirNum = 3;
        else if(dirNum > 3) dirNum = 0;
    }

    count ++;

    if(!loc[0] && !loc[1]) {
        console.log(count);
        return ;
    }
}

console.log(-1);
