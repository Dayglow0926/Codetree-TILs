const fs = require("fs");
const arr2 = fs.readFileSync(0).toString().trim().split("\n");

const w = []
const h = []

const nums = []

for(let arr of arr2){
    nums.push(arr.split(" ").map(Number));
}

for(let i = 0; i < nums.length; i++){
    w.push((nums[i].reduce((prev, cur) => prev + cur ,0) / nums[i].length).toFixed(1));
}

for(let j=0; j < nums[0].length; j++){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i][j];
    }
    h.push((sum / nums.length).toFixed(1));
}

console.log(w.join(" "));
console.log(h.join(" "));

const result = ((w.map(Number).reduce((pre,cur) => pre + cur ,0) + h.map(Number).reduce((pre,cur) => pre + cur ,0)) / (w.length + h.length)).toFixed(1)
console.log(result);
