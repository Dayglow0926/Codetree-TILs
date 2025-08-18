const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const q = input[0].split(' ');
let arr = q[0].split('');

for(let i=1; i<input.length; i++){
    switch(input[i]){
        case '1' : {
            const temp = arr.shift();
            arr.push(temp);
            break;
        }
        case '2' : {
            const temp = arr.pop();
            arr.unshift(temp);
            break;
        }
        case '3' : {
            for(let j=0; j<Math.floor(arr.length/2); j++){
                const temp = arr[j];
                arr[j] = arr[arr.length-1-j];
                arr[arr.length-1-j] = temp
            }
        }
    }

    console.log(arr.join(''));
}

