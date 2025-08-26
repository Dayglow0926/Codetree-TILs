const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.

function f(a, t) {
    if (t < 0) {
        return;
    }
    process.stdout.write(a[t] + " ");
    f(a, t - 1);
    process.stdout.write(a[t] + " ");
}

let a = Array(5).fill(0);

for (let i = 0; i < a.length; i++) {
    a[i] = i + 1;
}

f(a, n-1);
