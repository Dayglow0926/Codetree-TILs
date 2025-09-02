const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.

class Product {
    constructor(name = "codetree", code=50){
        this.name = name;
        this.code = code;
    }
}

const p1 = new Product()
const p2 = new Product(prod2_id, code2)

console.log(`product ${p1.code} is ${p1.name}`);
console.log(`product ${p2.code} is ${p2.name}`);
