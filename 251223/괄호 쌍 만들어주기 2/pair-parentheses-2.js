const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

let count = 0;
for(let i=0; i<A.length; i++){
    const find = A.slice(i, i+2);

    if(find === '(('){
        const other = A.slice(i+2);
        for(let j=0; j<other.length; j++){
            const find = other.slice(j, j+2);
            if(find === '))') count ++;
        }
    }
}

console.log(count);