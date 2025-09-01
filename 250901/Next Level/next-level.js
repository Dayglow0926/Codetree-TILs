const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class Character{
    constructor(id = 'codetree', level = 10){
        this.id = id;
        this.level = level;
    }
}

const character1 = new Character();
const character2 = new Character(user_id, level);

console.log("user",character1.id,"lv",character1.level);
console.log("user",character2.id,"lv",character2.level);
