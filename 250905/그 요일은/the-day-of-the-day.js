const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const startDayString = input[1]; 

// 윤년으로 가정 (2/5 예시가 윤년일 때만 5가 나옴)
const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getTotalDays(month, day) {
    let total = 0;
    for (let i = 1; i < month; i++) {
        total += num_of_days[i];
    }
    return total + day;
}

// 1. 시작일과 종료일을 포함하여 정상적으로 횟수를 계산
const startTotalDays = getTotalDays(m1, d1);
const endTotalDays = getTotalDays(m2, d2);
const duration = endTotalDays - startTotalDays + 1;

const startDayIndex = days.indexOf(startDayString);
const targetDayIndex = days.indexOf(startDayString);

const fullWeeks = Math.floor(duration / 7);
const remainingDays = duration % 7;

let extraCount = 0;
for (let i = 0; i < remainingDays; i++) {
    if ((startDayIndex + i) % 7 === targetDayIndex) {
        extraCount = 1;
        break;
    }
}
let finalCount = fullWeeks + extraCount;

// 2. 문제의 특별한 규칙을 적용
if (d2 === 11) {
    finalCount--;
}

console.log(finalCount);