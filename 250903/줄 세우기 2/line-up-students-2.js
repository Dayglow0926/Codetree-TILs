const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.
class Student{
    constructor(h, w, i){
        this.h = h;
        this.w = w;
        this.i = i;
    }
}

const list = [];
studentInputs.forEach((s, i) => {
    list.push(new Student(s[0], s[1], i+1));
})

list.sort((p,c) => {
    if(p.h != c.h) return p.h - c.h;
    return c.w - p.w;
})

list.forEach((s) => {
    console.log(s.h, s.w, s.i);
})