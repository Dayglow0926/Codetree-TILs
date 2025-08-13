const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);

const arr = Array(N).fill(0).map(() => Array(N).fill(0));

for(let i=1; i <= M; i++){
    const [n,m] = input[i].split(" ").map(Number);
    arr[n-1][m-1] = 1;
}
arr.forEach((a) => console.log(a.join(" ")))