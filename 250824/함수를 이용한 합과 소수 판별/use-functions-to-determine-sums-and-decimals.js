const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

function isSumEvent(n){
    const arr = n.toString().split('').map(Number);
    return arr.reduce((p,c) => p + c, 0) % 2 === 0;
}

let count = 0;

for(let i=A; i<=B; i++){
    if(isPrime(i) && isSumEvent(i)) count++;
}

console.log(count);