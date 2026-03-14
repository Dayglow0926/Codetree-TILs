const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

// Please Write your code here.

let count = 0;

for(let i=1; i<n; i++){
    for(let j=i+1; j<=n; j++){
        const finds = pairs.filter((v) => {
            return (v[0] === i && v[1] === j) || (v[0] === j && v[1] === i)
        })
        count = Math.max(finds.length, count);
    }
}

console.log(count)