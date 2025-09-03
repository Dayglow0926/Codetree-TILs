const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
class Num{
    constructor(n,i){
        this.n = n;
        this.i = i;
    }
}

const list = [];

arr.forEach((a, i) => {
    list.push(new Num(a, i+1));
})

list.sort((p,c) => p.n - c.n);

list.forEach((a, i) => {
    a.newIndex = i+1;
})

list.sort((p,c) => p.i - c.i);

const result = [];
list.forEach((s) => {
    result.push(s.newIndex);
})

console.log(result.join(" "));
