
let date = prompt('Please enter a date, in the format YYYY-MM-DD: ');

const d = new Date();
let unixTimeThen = Date.parse(date);
let unixTimeNow = d.getTime();
let milliseconds = unixTimeNow - unixTimeThen;
let years = milliseconds/(3.154e+10);
let age = Math.floor(years);

console.log('A person born on ' + date + ' is now ' + age + '.');