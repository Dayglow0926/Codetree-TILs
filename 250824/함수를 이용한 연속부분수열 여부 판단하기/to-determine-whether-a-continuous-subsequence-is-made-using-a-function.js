const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.

function check(a, b){
    let result = false;

    for(let i = 0; i<a.length; i++){
        for(let j = 0; j<b.length; j++){
            if(a[i+j] === b[j]) result = true;
            else {
                result = false;
                break;
            }
        }

        if(result) break;
    }

    return result;
}

console.log(check(a,b) ? "Yes" : "No");