const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map((v) => v.split('').reverse().map(Number));

// Please Write your code here.

const maxNumber = []
for(let x=0; x<n; x++){
    for(let y=x+1; y<n; y++){
        for(let z=y+1; z<n; z++){
            const maxLen = Math.max(arr[x].length, arr[y].length, arr[z].length);
            
            let carry = false;

            for(let l=0; l<maxLen; l++){
                let sum = 0;

                if(arr[x][l] !== undefined){
                    sum += arr[x][l];
                }
                if(arr[y][l] !== undefined){
                    sum += arr[y][l];
                }
                if(arr[z][l] !== undefined){
                    sum += arr[z][l];
                }

                if(sum > 9) {
                    carry = true;
                    break;
                }
            }

            if(!carry){
                let num = 0;
                num += Number([...arr[x]].reverse().join(''));
                num += Number([...arr[y]].reverse().join(''));
                num += Number([...arr[z]].reverse().join(''));

                maxNumber.push(num)
            }
        }
    }
}

if(maxNumber.length > 0){
    console.log(Math.max(...maxNumber))
    return ;
}
console.log(-1)