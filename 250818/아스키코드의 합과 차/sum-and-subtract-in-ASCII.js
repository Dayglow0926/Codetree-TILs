const fs = require('fs');
const i = fs.readFileSync(0).toString().trim().split(' ').map(n => n.charCodeAt(0));

console.log(i[0] + i[1], Math.abs(i[0] - i[1]));