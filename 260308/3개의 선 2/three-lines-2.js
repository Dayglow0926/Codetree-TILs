const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
if (n <= 3) {
    console.log(1);
    return;
}

const xSet = new Set();
const ySet = new Set();
for (const pt of points) {
    xSet.add(pt[0]);
    ySet.add(pt[1]);
}

// 후보 선들을 하나의 배열로 통합
const candidates = [];
for (const x of xSet) candidates.push({ type: 'x', val: x });
for (const y of ySet) candidates.push({ type: 'y', val: y });

const len = candidates.length;

// 3중 for문을 이용해 후보 선 중 3개를 고르는 모든 조합 확인
for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
            const l1 = candidates[i];
            const l2 = candidates[j];
            const l3 = candidates[k];
            
            let allCovered = true;
            
            // 선택된 3개의 선으로 모든 점을 덮을 수 있는지 검사
            for (let p = 0; p < n; p++) {
                const pt = points[p];
                
                const covered = 
                    (l1.type === 'x' && pt[0] === l1.val) || (l1.type === 'y' && pt[1] === l1.val) ||
                    (l2.type === 'x' && pt[0] === l2.val) || (l2.type === 'y' && pt[1] === l2.val) ||
                    (l3.type === 'x' && pt[0] === l3.val) || (l3.type === 'y' && pt[1] === l3.val);
                    
                // 하나라도 덮이지 않은 점이 있다면 현재 선 조합은 실패
                if (!covered) {
                    allCovered = false;
                    break; 
                }
            }
            
            // 모든 점이 덮였다면 1을 출력하고 즉시 종료
            if (allCovered) {
                console.log(1);
                return;
            }
        }
    }
}

// 모든 조합을 시도해도 안 된다면 0 출력
console.log(0);