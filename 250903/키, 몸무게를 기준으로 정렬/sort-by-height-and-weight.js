const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push([name, Number(height), Number(weight)]);
}

// Please Write your code here.
class Student{
    constructor(name, h, w){
        this.name = name;
        this.h = h;
        this.w = w;
    }
}

const list = [];

records.forEach((s) => {
    list.push(new Student(s[0], s[1], s[2]))
})

list.sort((p,c) => {
    if(p.h != c.h) return p.h - c.h;
    if(p.w != c.w) return c.w - p.w;
    return 0;
});

list.forEach((s) => {
    console.log(s.name, s.h, s.w);
})