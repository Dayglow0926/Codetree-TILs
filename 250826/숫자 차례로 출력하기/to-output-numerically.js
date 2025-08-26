const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function print(start, end){
    if(start > end) return ;

    process.stdout.write(`${start} `);
    print(start+1, end);
    if(start === end) process.stdout.write('\n');
    process.stdout.write(`${start} `);
}

print(1, n);