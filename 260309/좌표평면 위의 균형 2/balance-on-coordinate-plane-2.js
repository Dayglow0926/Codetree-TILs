const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let minM = Number.MAX_VALUE; 

for (let xLine = 2; xLine <= 100; xLine += 2) {
    for (let yLine = 2; yLine <= 100; yLine += 2) {
        let q1 = 0, q2 = 0, q3 = 0, q4 = 0;

        for (const pt of points) {
            const px = pt[0];
            const py = pt[1];

            if (px < xLine && py > yLine) q1++;      // 좌상단
            else if (px > xLine && py > yLine) q2++; // 우상단
            else if (px < xLine && py < yLine) q3++; // 좌하단
            else if (px > xLine && py < yLine) q4++; // 우하단
        }
        const currentM = Math.max(q1, q2, q3, q4);
        minM = Math.min(minM, currentM);
    }
}

console.log(minM);