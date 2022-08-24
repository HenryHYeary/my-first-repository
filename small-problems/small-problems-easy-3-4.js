function findFibonacciIndexByLength (numOfDigits) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonnaci;

  do {
    fibonnaci = first + second;
    count += 1n;
    first = second;
    second = fibonnaci;
  } while (String(fibonnaci).length < numOfDigits);

  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// input: number of digits contained in number
// output: index of the number at which that number of digits first appears

// data structures: need to create variables for separate parts of fib sequence
// algorithm: call an iteration method that will add the sum of the  previous two digits to return the next digit in the series
// THEN determine the index of the number where the num of digits first appears (can convert number to a string and determine digit length by string length)
// Above should be the result of the function
// Iteration should terminate when number of digits has been reached