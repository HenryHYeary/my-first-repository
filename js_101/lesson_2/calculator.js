const LANGUAGE = 'en';

const MESSAGES = require('./calculator_messages.json');

function messages(message, lang) {
  return MESSAGES[lang][message];
}

let rlSync = require('readline-sync');

function prompt (key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('welcome');

while (true) {

prompt('firstNumber');
let num1 = rlSync.question();

while (invalidNumber(num1)) {
  prompt('invalidNumber');
  num1 = rlSync.question();
}

prompt('secondNumber');
let num2 = rlSync.question();

while (invalidNumber(num2)) {
  prompt('invalidNumber');
  num2 = rlSync.question();
}

prompt('operation');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('invalidOperation');
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

console.log(`=> The result is: ${output}`);

prompt('continueOrNot');
let continueOrDiscontinue = rlSync.question();

if (continueOrDiscontinue[0].toLowerCase() !== 'y') break;
}