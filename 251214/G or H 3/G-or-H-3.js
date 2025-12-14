const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
}

// Please Write your code here.
const len = Math.max(...people.map((v) => v[0]));
const arr = Array.from({length: len+1}, () => 0);

for(let elem of people){
  arr[elem[0]] = elem[1] === 'G' ? 1 : 2;
}

let result = 0;

for(let i=1; i<=arr.length-k; i++){
  let sum = 0;
  for(let j=i; j<arr.length; j++){
    if(arr[j] !== 0){
      sum += arr[j];
    }

    if(j - i >= k) break;
  }

  result = Math.max(sum, result);
  if(result >= 2 * k) break;
}

console.log(result);