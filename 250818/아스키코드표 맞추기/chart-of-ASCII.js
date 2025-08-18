const fs = require('fs');
const i = fs.readFileSync(0).toString().trim().split(' ').map(n => String.fromCharCode(n));

console.log(i.join(' '));