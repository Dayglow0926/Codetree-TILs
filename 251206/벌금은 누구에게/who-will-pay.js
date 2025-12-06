const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.

const arr = Array.from({length: n+1},() => Number(0));

for(let i=0; i<m; i++){
    arr[penalizedPersons[i]]++;

    if(arr[penalizedPersons[i]] >= k){
        console.log(penalizedPersons[i]);
        return ;
    }
}

console.log(-1);