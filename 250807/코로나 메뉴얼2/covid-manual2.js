const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");

const stack = Array(5).fill(0);

arr.forEach((n) => {
    const a = n.split(" ");

    if(a[0] === 'Y'){
        if(Number(a[1] >= 37)) stack[0] ++;
        else stack[2]++;
    }else{
        if(Number(a[1] >= 37)) stack[1] ++;
        else stack[3]++;
    }
})

if(stack[0] >= 2) stack[4] = 'E';
else stack.pop();

console.log(stack.join(" "));

