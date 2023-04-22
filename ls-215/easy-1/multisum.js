/*
input: an integer greater than 1
output: the sum of all of the multiples of three and five from
1 to the current number.

Examples: If a three is passed in then the return value should
simply be 3. 
  - Examples are self explanatory and should be sufficient for this problem, can practice with guard clauses if you
    want 

Data Structure: Should keep a running total of the sum of all of the multiples
and add to the total whenever a new multiple is reached.

Algorithm: iterate from 1 to the target number if the number is evenly divisible
by 3 or 5 then add the number to the running total.
Once iteration is complete return the running total that you have built up.
*/

function multisum(number) {
  let runningTotal = 0;

  for (let count = 1; count <= number; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
      runningTotal += count;
    }
  }

  return runningTotal;
}

const log = console.log;
log(multisum(3));
log(multisum(5));
log(multisum(10));
log(multisum(1000));