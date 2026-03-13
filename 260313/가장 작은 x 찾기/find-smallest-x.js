const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let num = 0;

while(true){
    num++;

    let check = true;
    
    for(let i=1; i<=n; i++){
        let mul = num * (2**i);
        if(!(conditions[i-1][0] <= mul && conditions[i-1][1] >= mul)){
            check = false;
            break;
        }
    }

    if(check){
        console.log(num)
        return ;
    }

}