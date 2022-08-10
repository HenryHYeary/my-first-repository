const LANGUAGE = 'en';

const MESSAGES = require('./calculator_messages.json');

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

let rlSync = require('readline-sync');

function prompt (msg) {
  console.log(`=> ${msg}`)
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(messages('welcome'));

while (true) {

prompt(messages('firstNumber'));
let num1 = rlSync.question();

while (invalidNumber(num1)) {
  prompt(messages('invalidNumber'));
  num1 = rlSync.question();
}

prompt(messages('secondNumber'));
let num2 = rlSync.question();

while (invalidNumber(num2)) {
  prompt(messages('invalidNumber'));
  num2 = rlSync.question();
}

prompt(messages('operation'));
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(messages('invalidOperation'));
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

prompt(messages('continueOrNot'));
let continueOrDiscontinue = rlSync.question();

if (continueOrDiscontinue[0].toLowerCase() !== 'y') break;
}