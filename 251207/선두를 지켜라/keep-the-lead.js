const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.

const time = Math.max(aData.reduce((c, p) => c+p[1],0), bData.reduce((c, p) => c+p[0],0));
const arr = Array.from({length: time+1}, () => [0,0]);

let cur = 0;

for(let i=0; i < aData.length; i++){

    for(let j=1; j <= aData[i][1]; j++){
        arr[cur+j][0] = arr[cur+j-1][0] + aData[i][0];
    }

    cur += aData[i][1];
}

cur = 0;

for(let i=0; i < bData.length; i++){

    for(let j=1; j <= bData[i][1]; j++){
        arr[cur+j][1] = arr[cur+j-1][1] + bData[i][0];
    }

    cur += bData[i][1];
}

let first = '';
let count = 0;

arr.forEach((a, _) => {
    if(a[0] > a[1]){
        if(first === 'B') count++;

        first = 'A' 
        return ;
    }

    if(a[0] < a[1]){
        if(first === 'A') count++;
        
        first = 'B' 
        return ;
    }
})

console.log(count);