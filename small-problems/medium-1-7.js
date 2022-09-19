/*
input: number representing the nth number in the fibonacci sequence.
output: the fibonacci number at the nth number in the sequence.

Examples: should test larger numbers as this solution will be quicker than recursive solution.

Data Structure: should use three separate variables, a variable for the first number, a variable for the second number (in the sequence)
and set both to 1, finally set a fibonacci variable but do not assign it yet.

Algorithm: create a for loop and have fibonacci equal first plus second, next set first equal to second and set second equal to fibonacci.
Afterwards return fibonacci for the final result.
*/

function fibonacci(number) {
  let first = 1;
  let second = 1;
  let fibonacci;

  for (let i = 1; i <= number; i++) {
    if (i <= 2) {
      fibonacci = 1;
    } else {
      fibonacci = first + second;
      first = second;
      second = fibonacci;
    }
  }

  return fibonacci;
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));