const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

// Please Write your code here.

let result = 0;

for(let i=x; i<=y; i++){
    const numbers = i.toString().split('');
    const half = Math.floor(numbers.length/2)
    let check = true;

    for(let j=0; j<half; j++){
        if(numbers[j] !== numbers[numbers.length - 1 -j]){
            check = false;
            break;        
        }
    }

    if(check) result++;
}

console.log(result)