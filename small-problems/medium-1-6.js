/*
input: an integer
output: the nth fibonnaci number according to the input integer.

Examples: the examples seem to match the problem description.

Data Structure: create a variable that is continuously added to that will be returned
after the fibonacci iterations are finished.

Algorithm: Should use an if statement to return 1 if the number passed is either one or two.
next create a function similar to the sum function created in the problem description and call it on the 
function itself.
*/

function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));