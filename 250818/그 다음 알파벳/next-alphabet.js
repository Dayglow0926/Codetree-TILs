const fs = require('fs');
const i = fs.readFileSync(0).toString().trim();

console.log(String.fromCharCode(i.charCodeAt(0) === 122 ? 97 : i.charCodeAt(0) + 1 ));