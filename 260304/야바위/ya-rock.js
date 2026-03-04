const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' ').map(Number));
// Please Write your code here.

let result = 0;

for(let i=0; i<=2; i++){
    const lock = Array.from({length: 3}, () => false);
    lock[i] = true;
    let count = 0;

    for(let cups of commands){
        const temp = lock[cups[0]-1];
        lock[cups[0]-1] = lock[cups[1]-1];
        lock[cups[1]-1] = temp;

        if(lock[cups[2]-1]){
            count++;
        }
    }

    result = Math.max(result, count);
}

console.log(result)