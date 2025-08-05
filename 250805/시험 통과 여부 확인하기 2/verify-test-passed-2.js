const fs = require("fs")
const str = fs.readFileSync(0).toString().trim().split("\n");

let passCount = 0;

for(let i = 1; i < str.length; i++){
    const arr = str[i].split(" ").map(Number);

    const ave = arr.reduce((a,b) => a + b, 0) / 4;
    if(ave >= 60){
        console.log("pass");
        passCount ++;
    }else{
        console.log("fail");
    }
}

console.log(passCount);