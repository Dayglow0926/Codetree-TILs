const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.

function numberConvert(num){
    return [num-2,num-1,num,num+1,num+2].map((v) => {
        if(v < 1) return n + v;
        else if(v > n) return v - n;
        else return v;
    })
}

const list = [];
let count = 1;

for(let num of [a,b,c]){
    list.push(numberConvert(num))
    count *= list[list.length-1].length;
}

const list2 = [];
let count2 = 1;

for(let num of [a2,b2,c2]){
    list2.push(numberConvert(num));
    count2 *= list2[list2.length-1].length;
}

const list3 = []
let count3 = 1; 
for(let i=0; i<list.length; i++){
    const same = list[i].filter((v) => list2[i].indexOf(v)>-1);

    count3 *= same.length;
}

console.log(count+count2-count3)