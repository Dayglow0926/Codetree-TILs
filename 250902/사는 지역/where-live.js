const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.
class Person{
    constructor(name, addr, local){
        this.name = name;
        this.addr = addr;
        this.local = local;
    }
}

const list = [];

personLines.forEach((str) => {
    const data = str.split(' ');
    list.push(new Person(data[0], data[1], data[2]));
}) 

list.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  return 0;
});

console.log('name', list[0].name);
console.log('addr', list[0].addr);
console.log('city', list[0].local);
