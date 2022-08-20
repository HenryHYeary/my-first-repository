
const MESSAGES = require('./mortgage_calculator_messages.json');

let readline = require('readline-sync');

function prompt(key) {
  console.log(`=> ${MESSAGES[key]}`);
}

function invalidNumber(num) {
  return num === '' || Number.isNaN(Number(num));
}

prompt('welcome');

while (true) {

prompt('loanAmount');

let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt('invalidNumber');
  loanAmount = readline.question();
}

loanAmount = Number.parseFloat(loanAmount).toFixed(2);

prompt('annualPercentageRate');
let monthlyInterestRate = (Number(readline.question()) / 100) / 12;

while (invalidNumber(monthlyInterestRate)) {
  prompt('invalidNumber');
  monthlyInterestRate = (Number(readline.question()) / 100) / 12;
}



prompt('loanDurationMonths');
let loanDurationMonths = readline.question();

while (invalidNumber(loanDurationMonths)) {
  prompt('invalidNumber');
  loanDurationMonths = readline.question();
}

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

monthlyPayment = Number.parseFloat(monthlyPayment).toFixed(2);

console.log(`Your monthly payment is $${monthlyPayment}`);

prompt('continueOrNot');

let answer = readline.question();

if (answer[0].toLowerCase() !== 'y') break;
}