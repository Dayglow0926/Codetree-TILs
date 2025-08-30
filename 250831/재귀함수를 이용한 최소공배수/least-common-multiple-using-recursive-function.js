const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

function gcd(a, b){
    while(b){
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function lcm(a, b){
    return (a * b) / gcd(a, b) || 0;
}

function findLcmRecursive(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  
  const lastNumber = numbers.pop();

  const lcmOfRest = findLcmRecursive(numbers);
  
  return lcm(lastNumber, lcmOfRest);
}

console.log(findLcmRecursive(numbers));