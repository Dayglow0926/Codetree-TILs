const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class Secret{
    constructor(s_code, m_point, time){
        this.secretCode = s_code;
        this.meetPoint = m_point;
        this.time = time;
    }

}

const secret = new Secret(s_code, m_point, time);

console.log('secret code :', secret.secretCode);
console.log('meeting point :', secret.meetPoint);
console.log('time :', secret.time);
