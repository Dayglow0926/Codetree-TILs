const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
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

students.forEach((s) => {
    const student = s;
    list.push(new Student(student[0], student[1], student[2]))
})

list.sort((p,c) => {
    if(c.h != p.h) return c.h - p.h;
    if(c.w != p.w) return c.w - p.w;
    return p.i - c.i;
});

list.forEach((s,i) => {
    console.log(s.h, s.w, s.i);
})