const fs = require("fs");
const arr2 = fs.readFileSync(0).toString().trim().split("\n");

for(let arr of arr2){
    console.log(arr.split(" ").map(s => s.toLocaleUpperCase()).join(" "));
}