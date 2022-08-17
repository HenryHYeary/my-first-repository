function prompt(message) {
  console.log(`==> ${message}`);
}

let readlineSync = require('readline-sync');

prompt('Enter the first number:');
let num1 = Number(readlineSync.question());

prompt('Enter the second number:');
let num2 = Number(readlineSync.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);