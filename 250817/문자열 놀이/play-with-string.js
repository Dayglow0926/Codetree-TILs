const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const CONTENTS = input[0].split(" ");

let result = CONTENTS[0].split('');

for(let i=1; i<=CONTENTS[1]; i++){
    const q = input[i].split(' ');

    if(q[0] == 1){
        const temp = result[q[1]-1];
        result[q[1]-1] = result[q[2]-1]
        result[q[2]-1] = temp;
    }
    if(q[0] == 2){
        result = result.map((s) => {
            if(s == q[1]) return q[2];
            return s;
        })
    }

    console.log(result.join(''));
}