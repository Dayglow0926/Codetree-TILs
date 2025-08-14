const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];
let count = 0;

arr.forEach((n) => {
    n.split('').forEach((s,i) => {
        if(s === input && i > 1 && i < 4){
            console.log(n);
            count ++;
        }
    })
})

console.log(count);