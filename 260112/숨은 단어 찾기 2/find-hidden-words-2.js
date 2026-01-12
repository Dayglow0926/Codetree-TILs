const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1).map((v) => v.split(''));
// Please Write your code here.
//y, x
const checkXY = [[1,1], [0,1], [-1,1], [-1,0], [-1,-1], [0, -1], [1, -1], [1,0]]

let count = 0;

for(let y=0; y<n; y++){
    for(let x=0; x<m; x++){
        if(arr[y][x] === 'L'){
            for(let i=0; i<8; i++){
                const ny = y + checkXY[i][0], nx = x + checkXY[i][1];

                if(nx >= m || nx < 0 || ny >= n || ny < 0){
                    continue;
                }

                if(arr[ny][nx] === 'E'){

                    const ny2 = ny + checkXY[i][0], nx2 = nx + checkXY[i][1];

                    if(nx2 >= m || nx2 < 0 || ny2 >= n || ny2 < 0){
                        continue;
                    }

                    if(arr[ny2][nx2] === 'E'){
                        count++;
                    }

                }
            }

        }
    }
}

console.log(count);