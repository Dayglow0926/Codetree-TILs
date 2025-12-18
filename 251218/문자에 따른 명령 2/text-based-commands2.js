const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0].split('');

// Please Write your code here.
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const result = [0,0]
let rotation = 3;

for(let command of commands){
    if(command === 'L') {
        rotation--;
        if(rotation < 0) rotation += 4;
    }
    else if(command === 'R') rotation++;
    else if(command === 'F') {
        result[0] += dx[rotation % 4];
        result[1] += dy[rotation % 4]; 
    }

}

console.log(result.join(' '));



