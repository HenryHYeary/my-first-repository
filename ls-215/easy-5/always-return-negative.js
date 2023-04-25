/*
input: a positive or negative number
output: the negative form of the number

Examples: What if the argument is not a number? What about special numbers?
What if there is more than one argument? What if an argument is not supplied?

Data Structure: No extra data structure needed.

Algorithm: If the input integer is greater than or equal to zero, return the
negative form of the number
  - if the number is below zero then return the number as is.
*/

const log = console.log;

log(negative(6)); // -6
log(negative(-5)); // -5
log(negative(123)); // -123
log(negative(0)); // -0
log(negative(1.55)); // -1.55
log(negative(-1.55)); // -1.55

function negative(number) {
  if (number >= 0) {
    return -number;
  } else {
    return number;
  }
}

// ternary operator

function negative(number) {
  return number >= 0 ? -number : number;
}