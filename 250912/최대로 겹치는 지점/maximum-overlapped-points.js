const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
const events = []

for(let [l, r] of segments){
  events.push([l, +1]);
  events.push([r, -1]);
}

events.sort((a, b) => (a[0] - b[0]) || (b[1] - a[1]));

let cur = 0, ans = 0;
for (const [, delta] of events) {
    cur += delta;
    if (cur > ans) ans = cur;
}

console.log(ans);