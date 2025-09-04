const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const A = num_of_days.filter((_,i) => i<m1).reduce((p,c)=> p+c,0) + d1;
const B = num_of_days.filter((_,i) => i<m2).reduce((p,c)=> p+c,0) + d2;

const Day = ((B-A) % 7 + 7 )% 7;

switch(Day){
    case 1: console.log("Tue");
            break;
    case 2: console.log("Wed");
            break;
    case 3: console.log("Thu");
            break;
    case 4: console.log("Fri");
            break;
    case 5: console.log("Sat");
            break;
    case 6: console.log("Sun");
            break;
    case 0: console.log("Mon");
            break;
}