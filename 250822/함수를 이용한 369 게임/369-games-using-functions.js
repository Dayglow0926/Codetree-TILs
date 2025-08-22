const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
const regex = /3|6|9/;


function threeNumber(n){
    return n % 3 === 0;
}

function check369(n){
    return regex.test(n.toString()) || threeNumber(n);
}

let count = 0;

for(let i=A; i<=B; i++){
    if(check369(i)){
        count++;
    }
}

console.log(count);

