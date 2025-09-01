const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.

class Code{
    constructor(code, color, time){
        this.code = code;
        this.color = color;
        this.time = time;
    }
}

const code = new Code(u_code, l_color, time);

console.log('code :', code.code);
console.log('color :', code.color);
console.log('second :', code.time);