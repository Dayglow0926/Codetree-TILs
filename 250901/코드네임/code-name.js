const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.
class Agent{
    constructor(code, score){
        this.code = code;
        this.score = score;
    }
}

let worstAgent = [codenames[0], scores[0]];
const agentList = [new Agent(codenames[0], scores[0])];

for (let i = 1; i < scores.length; i++) {
    agentList.push(new Agent(codenames[i], scores[i]))

    if(worstAgent[1] > scores[i]) worstAgent = [codenames[i], scores[i]];
}

console.log(worstAgent[0], worstAgent[1]);