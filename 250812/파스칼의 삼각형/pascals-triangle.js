const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const arr = [[1]];

for(let i=1; i<N; i++){
    const arr2d = [];
    for(let j=0; j<=i; j++){
        const num = isNaN(arr[i-1][j-1] + arr[i-1][j]) ? 1 : arr[i-1][j-1] + arr[i-1][j];
        arr2d.push(num)
    }
    arr.push(arr2d);
}

arr.forEach((n) => console.log(n.join(" ")));