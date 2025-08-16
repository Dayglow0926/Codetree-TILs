const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function includeConvert(bool){
    return bool ? "Yes" : "No";
}

console.log(includeConvert(input.includes('ee')), includeConvert(input.includes('ab')))