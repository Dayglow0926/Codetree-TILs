const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.
class Student{
    constructor(name, kor, eng, math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

const list = [];

rawStudentData.forEach((s) => {
    const student = s.split(' ');
    list.push(new Student(student[0], Number(student[1]), Number(student[2]), Number(student[3])))
})

list.sort((p,c) => {
    if(p.kor != c.kor) return c.kor - p.kor;
    if(p.eng != c.eng) return c.eng - p.eng;   
    return c.math - p.math;   
});

list.forEach((s) => {
    console.log(s.name, s.kor, s.eng, s.math);
})