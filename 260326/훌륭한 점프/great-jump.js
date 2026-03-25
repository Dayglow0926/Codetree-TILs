const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.
const MAX = Math.max(arr[0], arr[arr.length - 1]);
const NUMBER_MAX = Math.max(...arr);
let result = NUMBER_MAX;

for(let i = NUMBER_MAX; i>=MAX; i--){
    if(arr.indexOf(i) < 0 ) continue;

    const array = [];

    arr.forEach((elem, index) => {
        if(elem <= i){
            array.push(index);
        }
    })

    let lenCheck = true;

    for(let j=0; j<array.length-1; j++){
        const dist = array[j+1] - array[j];

        if(dist > k) {
            lenCheck = false;
            break;
        }
    }

    if(lenCheck){
        result = Math.min(result, i);
    }
}

console.log(result);