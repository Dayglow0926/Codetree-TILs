const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const result = [0, 0]; 

for (let i = 0; i < input.length - 1; i++) {
    const twoChars = input.slice(i, i + 2);

    if (twoChars === 'ee') {
        result[0]++;
    } else if (twoChars === 'eb') {
        result[1]++;
    }
}

console.log(result[0], result[1]);
