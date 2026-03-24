const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number).sort((a,b) => a-b);

// Please Write your code here.
const result = [arr[0]];

for(let i=1; i<n; i++){
    if(arr[i] - result[0] <= k){
        result.push(arr[i]);
    }else{
        console.log(result.length);
        return;
    }
}
