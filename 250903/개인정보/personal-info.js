const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
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

students.forEach((s) => {
    list.push(new Student(s.name, s.height, s.weight))
})

list.sort((p,c) => {
    if(p.name > c.name) return 1;
    if(p.name < c.name) return -1;
    return 0;
});

console.log("name");
list.forEach((s) => {
    console.log(s.name, s.h, s.w);
})

list.sort((p,c) => {
    return c.h - p.h;
});
console.log("");
console.log("height");
list.forEach((s) => {
    console.log(s.name, s.h, s.w);
})