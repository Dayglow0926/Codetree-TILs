const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
class Dot{
    constructor(x, y, i){
        this.x = x;
        this.y = y;
        this.i = i;
    }
}

const list = []
points.forEach((p, i) => {
    list.push(new Dot(p[0], p[1], i+1));
})

list.sort((p, c) => {
    const dot = (Math.abs(p.x) + Math.abs(p.y)) - (Math.abs(c.x) + Math.abs(c.y));

    if(dot === 0) return p.i - c.i;

    return dot;
})

list.forEach((d) => {
    console.log(d.i)
})