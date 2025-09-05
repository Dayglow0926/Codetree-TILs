const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const janFirstDayString = input[1];


const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


function getTotalDays(month, day) {
    let total = 0;
    for (let i = 1; i < month; i++) {
        total += num_of_days[i];
    }
    return total + day;
}

const startTotalDays = getTotalDays(m1, d1);
const endTotalDays = getTotalDays(m2, d2);

const janFirstDayIndex = days.indexOf(janFirstDayString);

let count = 0;
// 3. 시작일부터 종료일까지 순회
for (let currentDay = startTotalDays; currentDay <= endTotalDays; currentDay++) {
    // 4. 현재 날짜의 요일 인덱스를 계산
    // (currentDay - 1)은 1월 1일로부터 며칠이 지났는지를 의미
    // 여기에 기준 요일 인덱스를 더해주면 오늘의 요일 인덱스가 나옴
    const currentDayIndex = (currentDay - 1 + janFirstDayIndex) % 7;
    
    // 5. 오늘의 요일이 우리가 찾는 요일(1월 1일의 요일)과 같다면 카운트 증가
    if (currentDayIndex === janFirstDayIndex) {
        count++;
    }
}

console.log(count);