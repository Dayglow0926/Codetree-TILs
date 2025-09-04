const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const A = num_of_days.filter((_,i) => i<m1).reduce((p,c)=> p+c,0) + d1;
const B = num_of_days.filter((_,i) => i<m2).reduce((p,c)=> p+c,0) + d2;



console.log(B-A+1);
