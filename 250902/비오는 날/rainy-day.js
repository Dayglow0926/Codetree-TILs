const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.

class Forecast{
    constructor(date, week, weather){
        this.date = date;
        this.week = week;
        this.weather = weather;
    }
}

const list = [];

forecasts.forEach((cast) => {
    if(cast[2] === 'Rain'){
        list.push(new Forecast(cast[0], cast[1], cast[2]));
    }
})

console.log(list[0].date, list[0].week, list[0].weather);