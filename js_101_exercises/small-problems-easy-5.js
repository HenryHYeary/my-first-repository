let readlineSync = require('readline-sync');

console.log('What is the bill?\n');
bill = readlineSync.prompt();
bill = parseInt(bill, 10);

console.log('What is the tip percentage?\n');
tipPercent = readlineSync.prompt();
tipPercent = parseInt(tipPercent, 10);

tip = (tipPercent / 100) * bill;
total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);