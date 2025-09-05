const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// A는 횟수를 세고 싶은 목표 요일입니다.
const targetDayString = input[1]; 

// 2024년은 윤년이므로 2월은 29일입니다.
const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 특정 월/일까지의 총 일수를 계산하는 함수
function getTotalDays(month, day) {
    let total = 0;
    for (let i = 1; i < month; i++) {
        total += num_of_days[i];
    }
    return total + day;
}

// 1. 시작일과 종료일의 총 일수를 계산합니다.
const startTotalDays = getTotalDays(m1, d1);
const endTotalDays = getTotalDays(m2, d2);

// 2. 시작일과 종료일을 모두 포함한 전체 기간을 계산합니다.
const duration = endTotalDays - startTotalDays + 1;

// 3. 문제의 조건에 따라, 시작일(m1, d1)은 항상 월요일(인덱스 0)입니다.
const startDayIndex = 0; // Monday

// 4. 우리가 찾고자 하는 목표 요일의 인덱스를 찾습니다.
const targetDayIndex = days.indexOf(targetDayString);

// 5. 전체 기간에 온전히 포함된 주의 수를 계산합니다. (이것이 최소 횟수)
const fullWeeks = Math.floor(duration / 7);

// 6. 온전한 주를 제외하고 남는 날짜 수를 계산합니다.
const remainingDays = duration % 7;

// 7. 남는 날짜 중에 목표 요일이 한 번 더 포함되는지 확인합니다.
let extraCount = 0;
// 시작 요일(월요일)부터 남는 날들을 순서대로 확인합니다.
for (let i = 0; i < remainingDays; i++) {
    // 오늘의 요일 인덱스 = (시작 요일 인덱스 + i) % 7
    // 이 문제에서는 시작이 항상 월요일(0)이므로 그냥 i와 같음
    if (i === targetDayIndex) {
        extraCount = 1;
        break;
    }
}

// 8. 최종 결과를 출력합니다.
const finalCount = fullWeeks + extraCount;
console.log(finalCount);