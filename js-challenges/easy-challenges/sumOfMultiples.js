/*
input: either one natural number or a set of natural numbers.
output: The sum of all of the multiples of that number up to the given integer(s)

Examples: default set of numbers should be three and five if the set of numbers is not provided

Data Structure: should take the multiples as an array argument from comma separated
values, then create a separate loop for each number within the multiples array counting upwards
while the total sum of the count is less than the number itself. Finally add all of these respective sums together
and return the sum

Algorithm:
create array for multiples
for each factor
  add the factor to itself while it is less than the argument number
  push the multiple to the array
end

filter out the repeat multiples
add together all of the multiples and return the sum.
*/

class SumOfMultiples {
  static to(targetNum) {
    return new SumOfMultiples(3, 5).to(targetNum);
  }

  constructor(...numbers) {
    this.numbers = numbers;
  }

  to(targetNum) {
    let multArr = [];

    this.numbers.forEach(num => {
      for (let count = num; count < targetNum; count += num) {
        multArr.push(count);
      }
    });
  
    let noRepeats = multArr.filter((num, index) => multArr.indexOf(num) === index);

    return noRepeats.reduce((sum, next) => sum + next, 0);
  }
}

module.exports = SumOfMultiples;