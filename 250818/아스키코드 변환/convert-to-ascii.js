const fs = require('fs');
const i = fs.readFileSync(0).toString().trim().split(' ').map(n => {
    if(isNaN(n)) return n.charCodeAt(0);
    if(!isNaN(n)) return String.fromCharCode(n);
});

console.log(i.join(' '));

