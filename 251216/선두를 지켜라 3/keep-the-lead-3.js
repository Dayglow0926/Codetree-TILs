const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

// Please Write your code here.

const TIME = Math.max(A_moves.reduce((p,c) => p + c[1], 0), B_moves.reduce((p,c) => p + c[1],0))

//[A,B]
const arr = Array.from({length: TIME+1}, () => [0,0])

let time = 0;
for(let i=0; i<n; i++){
  for(let j=1; j<=A_moves[i][1]; j++){
    time += 1;
    arr[time][0] = arr[time-1][0] + A_moves[i][0];
  }
}

time = 0;
for(let i=0; i<m; i++){
  for(let j=1; j<=B_moves[i][1]; j++){
    time += 1;
    arr[time][1] = arr[time-1][1] + B_moves[i][0];
  }
}

let bp = '';
let result = 0;

arr.forEach((v, i) => {
  if(i === 0) return ;

  let winner = '';

  if(v[0] > v[1]) winner = 'A';
  else if(v[0] < v[1]) winner = 'B';
  else winner = 'AB';

  if(winner != bp) {
    
    result++;
    bp = winner;
  }
})

console.log(result);