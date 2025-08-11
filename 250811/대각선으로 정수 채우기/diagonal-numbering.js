const fs = require("fs");
const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const arr = Array.from({ length: N }, () => Array(M).fill(0));

let count = 1;

for (let j = 0; j < M; j++) {
  let i = 0, c = j;
  while (i < N && c >= 0) arr[i++][c--] = count++;
}

for (let i0 = 1; i0 < N; i0++) {
  let i = i0, c = M - 1;
  while (i < N && c >= 0) arr[i++][c--] = count++;
}

console.log(arr.map(r => r.join(" ")).join("\n"));