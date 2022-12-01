/*
input: a positive or negative integer
output: the negative of the number if it is a positive integer or the same number if it is already negative.

Examples: If the number passed is zero then it should return a negative 0.

Data Structure: should not need to create another string, array or object for this problem.

Algorithm: Use an if statement to return the negative form of the number if it is less than zero
and if it is below zero then return the number as is.
*/

function negative(number) {
  if (number >= 0) {
    return -number;
  }  else {
    return number;
  }
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));

function negative2(number) {
  return (number >= 0 ? -number : number);
}

console.log(negative2(5));
console.log(negative2(-3));
console.log(negative2(0));