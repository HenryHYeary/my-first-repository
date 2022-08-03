function multiply(left, right) {
    return left * right;
}

function getNumber(prompt) {
    let readlineSync = require('readline-sync');
    return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter a number: ');
let right = getNumber('Enter another number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);


