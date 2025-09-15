const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

let pos = 0;                       // 현재 위치
const delta = new Map();           // 좌표별 +1/-1 누적

function addDelta(x, v) {
  delta.set(x, (delta.get(x) || 0) + v);
}

// 1. 이동 명령 처리 → 구간 이벤트(+1/-1) 기록
for (const cmd of commands) {
  const [xs, dir] = cmd.trim().split(/\s+/);
  const x = Number(xs);

  const next = dir === "L" ? pos - x : pos + x;
  const a = Math.min(pos, next);
  const b = Math.max(pos, next);

  addDelta(a, +1);  // 구간 시작점
  addDelta(b, -1);  // 구간 끝점

  pos = next;
}

// 2. 좌표 정렬 후 스위핑
const coords = Array.from(delta.keys()).sort((a, b) => a - b);

let cur = 0;
let ans = 0;

for (let i = 0; i < coords.length - 1; i++) {
  const x = coords[i];
  const nx = coords[i + 1];

  cur += delta.get(x);  // 현재 좌표에서 변화 적용
  if (cur >= 2) {
    ans += (nx - x);    // 2번 이상 지난 구간 길이만 합산
  }
}

console.log(ans);