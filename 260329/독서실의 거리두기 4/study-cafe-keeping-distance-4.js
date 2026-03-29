const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[1].split('').map(Number);
// Please Write your code here.

function lenCheck(arr){
    let min = 100;

    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            for(let j=i+1; j<arr.length; j++){
                if(arr[j] === 1){
                    min = Math.min(min, j - i);
                    break;
                }
            }
        }
    }

    return min;
}

let result = 0;

for(let i=0; i<numbers.length ;i++){
    if(numbers[i] === 0){
        numbers[i] = 1;
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[j] === 0){
                numbers[j] = 1;
                result = Math.max(result, lenCheck(numbers));
                numbers[j] = 0;
            }
        }
        numbers[i] = 0;
    }
}

console.log(result);