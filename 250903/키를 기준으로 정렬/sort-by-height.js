const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.
class Person{
    constructor(name, h, w){
        this.name = name;
        this.h = h;
        this.w = w;
    }
}

const list = [];

studentsInput.forEach((s) => list.push(new Person(s[0], s[1], s[2])))

list.sort((p,c) => p.h - c.h);

list.forEach((s) => {
    console.log(s.name, s.h, s.w);
})