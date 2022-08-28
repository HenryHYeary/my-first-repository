// input : number of digits contained by target fib number
// output : index of target fib number matching number of digits

// Examples include n appended on to each number to use BigInt integers
// Examples are boolean statements that should match the output

// need several variables to add to each other to make sure we can execute fibonacci math
// should keep track of the index we are on with an incrementing counter
// should use BigInt integers within function to make sure we can verify these test cases
// we can assume argument is always >= 2

// should use an iterative loop that uses variable reassignment to make sure we keep a track of the total fib number
// should return counter not actual fib number
// use do while as you want to add two independent digits irrespective of their index
// Can easily use string length of fibonacci number to verify whether it has meth the length of the specified number of digits or not
// should reassign first value to second value and second to fib to make sure the total fib number is continuously being added to as well as keeping track of prev num in each iteration


function findFibonacciIndexByLength(numOfDigits) {
  let first = 1n;
  let second = 1n;
  let counter = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    counter += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < numOfDigits);

  return counter;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));