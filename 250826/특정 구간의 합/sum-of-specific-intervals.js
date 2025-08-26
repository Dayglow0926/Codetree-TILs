const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.

function sum(a1, a2){
    let result = 0;
    for(let i=a1; i<=a2; i++){
       result += A[i-1]; 
    }
    return result;
}

for(let arr of queries){
    console.log(sum(arr[0], arr[1]));
}