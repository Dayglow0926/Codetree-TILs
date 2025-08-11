const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const arr = Array.from({ length: N }, () => Array(N).fill(0));

let count = 1;
const start = (N-1) % 2;

for(let j=N-1; j>=0; j--){
    if(j % 2 === start){
        for(let i = N-1; i >= 0; i--){
            arr[i][j] = count;
            count++;
        }
    }else{
        for(let i = 0; i < N; i++){
            arr[i][j] = count;
            count++;
        }
    }
}

console.log(arr.map(r => r.join(" ")).join("\n"));