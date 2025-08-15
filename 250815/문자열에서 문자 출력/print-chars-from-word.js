const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim().split('');
 
console.log(givenStr.join('\n'))
