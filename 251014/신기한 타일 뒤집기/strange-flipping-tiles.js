const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(n => {
    const arr = n.split(' ');
    return [Number(arr[0]), arr[1]]
  });

// Please Write your code here.

let leftTotal = 0, rightTotal = 0;

for(let i=0; i<n; i++){
  const count = commands[i][0];
  const lr = commands[i][1];

  if(lr === 'L') leftTotal += count;
  else rightTotal += count; 
}

const size = leftTotal + rightTotal + 1;
const tile = new Array(size).fill(0)
let pos = 0;

for(let i=0; i<n; i++){  
  for(let j=0; j<commands[i][0]; j++){
    const idx = pos + leftTotal;
    
    if(commands[i][1] === 'L') tile[idx] = 1 // 흰색
    else tile[idx] = 2; //검은색

    if(j<commands[i][0]-1) pos += commands[i][1] === 'L' ? -1 : 1;
  }
}

let whiteCount = 0;
let blackCount = 0;

tile.forEach(n => {
  if(n === 1) whiteCount++;
  else if(n === 2) blackCount++;
})

console.log(whiteCount, blackCount);