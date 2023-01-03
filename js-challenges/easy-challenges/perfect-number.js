/*
input: a natural number
output: a classification of perfect, abundant, or deficient

Examples: Negative numbers should raise an exception. All divisors must add up
to a greater sum than the original number to be abundant, perfect if it is the same,
or deficient if it is less.

Data Structure: should first use a guard clause to prevent negative numbers from being
passed through. Then iterate upwards from 1 determining if the remainder of each integer is zero
if it is, add it to an array of divisors.

Finally add up the array of divisors and then compare it to the original number passed as an argument.

Algorithm: if number <= 0 throw an exception

create array of divisors

iterate through all numbers from 1 to argument number.
  if remainder is 0, then add current num to divisors list
end

add together all divisors to determine sum

if sum is greater than original num
  return abundant
else if sum is less than original num
  return deficient
else 
  return perfect
*/

class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error('Number must be greater than or equal to one.');
    }

    let divisors = [];

    for (let count = 1; count < number; count++) {
      if (number % count === 0) {
        divisors.push(count);
      }
    }

    let sumOfDivs = divisors.reduce((sum, next) => sum + next, 0);

    if (sumOfDivs > number) {
      return 'abundant';
    } else if (sumOfDivs < number) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;