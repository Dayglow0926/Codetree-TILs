const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

function weather(m){
    if(m >= 3 && m <= 5) return "Spring";
    if(m >= 6 && m <= 8) return "Summer";
    if(m >= 9 && m <= 11) return "Fall";
    else return "Winter";
}

function checkDate(y, m, d){
    const date = new Date(`${y}-${m}-${d}`);

    return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d ? weather(date.getMonth() + 1) : -1;
}

console.log(checkDate(year, month, day));