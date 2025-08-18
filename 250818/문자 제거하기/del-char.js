const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let result = input[0];

for(let i=1; i<input.length; i++){
    const idx = Number(input[i]);
    if(result.length <= idx){
        result = result.slice(0, result.length-1);
    }else{
        result = result.slice(0, idx) + result.slice(idx + 1);
    }
    console.log(result);
}

