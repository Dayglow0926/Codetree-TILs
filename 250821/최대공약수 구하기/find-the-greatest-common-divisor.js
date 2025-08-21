const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function gcd(n, m){

    while(m){
        const temp = m;
        m = n % m;
        n = temp;
    }

    console.log(n);

}

gcd(n,m);