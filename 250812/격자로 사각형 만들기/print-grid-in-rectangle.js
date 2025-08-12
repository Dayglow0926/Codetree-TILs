const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const arr = Array(N).fill(1).map(() => Array(N).fill(1));

for(let i=1; i<N; i++){
    for(let j=1; j<N; j++){
        arr[i][j] = arr[i-1][j] + arr[i-1][j-1] + arr[i][j-1]
    }
}

arr.forEach((n)=> console.log(n.join(" ")))