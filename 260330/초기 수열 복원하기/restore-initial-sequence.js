const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0])
const numbers = input[1].split(' ').map(Number);
// Please Write your code here.

for(let i=1; i<n; i++){
    let arr = [i];

    for(let j=0; j<numbers.length; j++){
        const val = numbers[j]-arr[j];
        if(arr.indexOf(val)>-1){
            break;
        }
        arr.push(val);
    }

    if(arr.length === n){
        console.log(arr.join(' '));
        return ;
    }
    arr = [];
}
