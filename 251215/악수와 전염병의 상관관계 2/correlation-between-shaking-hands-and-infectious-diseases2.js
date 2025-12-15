const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
//N: 개발자 수, K: 최대 전염횟수, P: 첫 감염자 번호, T: 악수 횟수
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}
// Please write your code here.
shakes.sort((a, b) => a.time - b.time)

//[감염유무, 감염시킨 횟수]
const people = Array.from({length: n+1}, (v,i) => i===p ? [1,0] : [0, 0]);

for(let i=0; i<t; i++){
    if(people[shakes[i].person1][0] && people[shakes[i].person2][0]){
        people[shakes[i].person1][1]++;
        people[shakes[i].person2][1]++;
    }else if(!people[shakes[i].person2][0] && people[shakes[i].person1][0] && people[shakes[i].person1][1] < k) {
        people[shakes[i].person1][1]++;
        people[shakes[i].person2][0] = 1;
    }else if(!people[shakes[i].person1][0] && people[shakes[i].person2][0] && people[shakes[i].person2][1] < k) {
        people[shakes[i].person2][1]++;
        people[shakes[i].person1][0] = 1;
    }
};

let result = '';

people.forEach((v, i) => {
    if(i>0){
        result += v[0];
    }
})

console.log(result);