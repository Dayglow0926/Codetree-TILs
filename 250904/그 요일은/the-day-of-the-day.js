const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];

const ADate = num_of_days.filter((_,i) => i<m1).reduce((p,c)=> p+c,0) + d1;
const BDate = num_of_days.filter((_,i) => i<m2).reduce((p,c)=> p+c,0) + d2;

const Repeat = parseInt((BDate - ADate) / 7);
const day = (BDate - ADate) % 7;

console.log(Repeat + (days.indexOf(A) >= day && 1));