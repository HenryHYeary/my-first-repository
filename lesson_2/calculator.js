const MESSAGES = require('./calculator_messages.json');

let rlSync = require('readline-sync');

function prompt (msg) {
  console.log(`=> ${msg}`)
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {

prompt(MESSAGES['firstNumber']);
let num1 = rlSync.question();

while (invalidNumber(num1)) {
  prompt(MESSAGES['invalidNumber']);
  num1 = rlSync.question();
}

prompt(MESSAGES['secondNumber']);
let num2 = rlSync.question();

while (invalidNumber(num2)) {
  prompt(MESSAGES['invalidNumber']);
  num2 = rlSync.question();
}

prompt(MESSAGES['operation']);
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(MESSAGES['invalidOperation']);
  operation = rlSync.question();
}


let output;
switch (operation) {
  case '1': 
    output = Number(num1) + Number(num2);
    break;
  case '2':
    output = Number(num1) - Number(num2);
    break;
  case '3':
    output = Number(num1) * Number(num2);
    break;
  case '4':
    output = Number(num1) / Number(num2);
    break;
  default:
}

prompt(`The result is: ${output}`);

prompt(MESSAGES['continueOrNot']);
let continueOrDiscontinue = rlSync.question();

if (continueOrDiscontinue[0].toLowerCase() !== 'y') break;
}