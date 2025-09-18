const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.trim().split(/\s+/)); // ["거리", "방향"]


let leftTotal = 0, rightTotal = 0;
for (let i = 0; i < n; i++) {
  const steps = Number(commands[i][0]);
  const dir = commands[i][1];
  if (dir === 'L') leftTotal += steps;
  else rightTotal += steps;
}

const offset = leftTotal;
const size = leftTotal + rightTotal + 1;

// per-tile state
const whiteCount = new Uint8Array(size);
const blackCount = new Uint8Array(size);
const color      = new Uint8Array(size); // 0/1/2/3

// 2) 단일 패스로 칠하기
let pos = 0; // 실제 좌표(시작 0). 배열 인덱스는 pos + offset
for (let i = 0; i < n; i++) {
  const steps = Number(commands[i][0]);
  const dir = commands[i][1]; // 'L' => 흰, 'R' => 검

  for (let s = 0; s < steps; s++) {
    const idx = pos + offset;

    if (color[idx] !== 3) { // 이미 회색이면 계속 회색 유지
      if (dir === 'L') {
        if (whiteCount[idx] < 255) whiteCount[idx]++; // 안전 가드
      } else {
        if (blackCount[idx] < 255) blackCount[idx]++;
      }

      if (whiteCount[idx] >= 2 && blackCount[idx] >= 2) {
        color[idx] = 3; // 둘 다 2번 이상 → 회색 확정
      } else {
        // 아직 회색 조건이 아니면 마지막에 칠한 색을 표시
        color[idx] = (dir === 'L' ? 1 : 2);
      }
    }

    // 마지막 칸이 아니면 다음 칸으로 이동 (마지막 칸에 서 있어야 함)
    if (s < steps - 1) pos += (dir === 'L' ? -1 : 1);
  }
}

// 3) 개수 세기
let whiteCells = 0, blackCells = 0, grayCells = 0;
for (let i = 0; i < size; i++) {
  if (color[i] === 1) whiteCells++;
  else if (color[i] === 2) blackCells++;
  else if (color[i] === 3) grayCells++;
}

console.log(whiteCells, blackCells, grayCells);
