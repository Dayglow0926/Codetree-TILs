const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function checkDate(m, d){
    const date = new Date(`2021-${m}-${d}`);

    return date.getMonth()+1 === m && date.getDate() === d
}

console.log(checkDate(m, d) ? "Yes" : "No");