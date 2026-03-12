const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seat = input[1].split('');

// Please Write your code here.
if (input.length < 2) return;

let maxMinDist = 0; // 우리가 찾고자 하는 정답 (최소 거리들 중 최댓값)

// 1. 모든 자리를 순회하며 빈자리('0')를 찾음
for (let i = 0; i < n; i++) {
    if (seat[i] === '0') {
        // 빈자리에 임시로 사람을 앉힘
        seat[i] = '1';

        // 2. 현재 좌석 배치에서 가장 가까운 두 사람의 거리 찾기
        let lastOneIdx = -1;
        let currentMinDist = Infinity;

        for (let j = 0; j < n; j++) {
            if (seat[j] === '1') {
                if (lastOneIdx !== -1) {
                    // 이전 사람과의 거리를 계산하여 최소값 갱신
                    currentMinDist = Math.min(currentMinDist, j - lastOneIdx);
                }
                lastOneIdx = j; // 현재 사람의 위치를 기억
            }
        }

        // 3. 가능한 최소 거리들 중 가장 큰 값을 갱신 (Min-Max 패턴)
        maxMinDist = Math.max(maxMinDist, currentMinDist);

        // 다음 탐색을 위해 방금 앉혔던 사람을 다시 치움 (원상복구)
        seat[i] = '0';
    }
}

// 결과 출력
console.log(maxMinDist);