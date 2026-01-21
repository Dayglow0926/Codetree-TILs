const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let hour = 0;

for(let i=0; i<n; i++){
    const arr = Array.from({length: 1000}, () => 0);

    for(let j=0; j<n; j++){
        if(i === j) continue;

        let [a, b] = segments[j];
        for(let s=a; s<b; s++){
            arr[s] = 1;
        }
    }

    hour = Math.max(hour, arr.filter((v) => v===1).length);
}

console.log(hour);