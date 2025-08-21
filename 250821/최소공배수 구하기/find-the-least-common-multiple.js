const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function lcm(n, m){
    const preArr = input[0].split(' ').map(Number);

    while(m){
        const temp = m;
        m = n % m;
        n = temp;
    }

    console.log((preArr[0] * preArr[1]) / n)
}

lcm(n,m);