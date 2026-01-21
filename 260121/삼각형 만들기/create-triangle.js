const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
// Please Write your code here.

let area = 0;

for(let i=0; i<n; i++){
    let p1 = points[i];
    for(let j=i+1; j<n; j++){
        let lineIndex = [0, 0];
        let p2 = points[j];

        if(p1[0] === p2[0]) lineIndex[0] = Math.abs(p1[1] - p2[1]);
        if(p1[1] === p2[1]) lineIndex[1] = Math.abs(p1[0] - p2[0]);

        for(let l=j+1; l<n; l++){
            let p3 = points[l];

            if(!lineIndex[0]){
                if(p3[0] === p1[0]) lineIndex[0] = Math.abs(p3[1] - p1[1]);
                if(p3[0] === p2[0]) lineIndex[0] = Math.abs(p3[1] - p2[1]);
            }

            if(!lineIndex[1]){
                if(p3[1] === p1[1]) lineIndex[1] = Math.abs(p3[0] - p1[0]);
                if(p3[1] === p2[1]) lineIndex[1] = Math.abs(p3[0] - p2[0]);
            }

            if(lineIndex[0] && lineIndex[1]){
                area = Math.max(lineIndex[0] * lineIndex[1], area);
            }
        }
    }
}

console.log(area)