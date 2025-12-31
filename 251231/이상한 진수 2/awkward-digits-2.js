const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split('').map(Number);

// Please Write your code here.

let result = 0;
let change = false;

for(let i=0; i<a.length; i++){
    if(a[i] === 0 && !change){
        a[i] = 1;
        change = true;
    }

    result += 2**(a.length - i -1) * a[i];
}

console.log(result);