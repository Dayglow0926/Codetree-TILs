const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const result = [...input.matchAll(/(\d+)(?=[\p{P}\p{S}])/gu)]
  .map(m => Number(m[1]));

console.log(result[0] + result[1]);