const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const points = input.slice(0).map(line => line.split('').map(Number))

// Please Write your code here.

const winningTeams = new Set();

const lines = [
    // 가로 3줄
    [points[0][0], points[0][1], points[0][2]],
    [points[1][0], points[1][1], points[1][2]],
    [points[2][0], points[2][1], points[2][2]],
    // 세로 3줄
    [points[0][0], points[1][0], points[2][0]],
    [points[0][1], points[1][1], points[2][1]],
    [points[0][2], points[1][2], points[2][2]],
    // 대각선 2줄
    [points[0][0], points[1][1], points[2][2]],
    [points[0][2], points[1][1], points[2][0]]
];

for (const line of lines) {
    const uniqueNums = new Set(line);

    if (uniqueNums.size === 2) {
        const teamArr = Array.from(uniqueNums).sort();
        
        const teamStr = teamArr.join('');
        
        winningTeams.add(teamStr);
    }
}

console.log(winningTeams.size);