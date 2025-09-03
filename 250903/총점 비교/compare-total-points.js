const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.
class Student{
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const list = [];

studentData.forEach((s) => {
    const student = s;
    list.push(new Student(student[0], Number(student[1]), Number(student[2]), Number(student[3])))
})

list.sort((p,c) => {
    return (p.kor + p.eng + p.math) - (c.kor + c.eng + c.math);
});

list.forEach((s) => {
    console.log(s.name, s.kor, s.eng, s.math);
})