let readlineSync = require('readline-sync');

console.log('What is your name?');
let answer = readlineSync.question();

if (answer.endsWith('!')) {
  console.log(`HELLO ${answer.toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${answer}.`);
}