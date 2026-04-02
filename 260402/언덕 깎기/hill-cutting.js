const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = [];
for (let i = 1; i <= n; i++) {
    nums.push(Number(input[i]));
}

let minCost = Infinity;

for (let i = 0; i <= 83; i++) {
    const minTarget = i;
    const maxTarget = i + 17;
    let currentCost = 0;

    for (let j = 0; j < n; j++) {
        const height = nums[j];

        if (height < minTarget) {
            currentCost += Math.pow(minTarget - height, 2);
        } else if (height > maxTarget) {
            currentCost += Math.pow(height - maxTarget, 2);
        }
    }

    if (currentCost < minCost) {
        minCost = currentCost;
    }
}

console.log(minCost);

