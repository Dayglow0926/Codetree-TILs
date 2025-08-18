const fs = require('fs');
const i = fs.readFileSync(0).toString().trim();

console.log(String.fromCharCode(i.charCodeAt(0) === 97 ? 122 : i.charCodeAt(0) - 1 ));