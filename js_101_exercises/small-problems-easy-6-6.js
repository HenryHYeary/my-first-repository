/*
input: a positive integer
output: an array containing all integers betwwen 1 and the argument inclusive.

Examples: If 1 is passed in as the input then the array should only contain 1.

Data Structure: should create a blank array to which each number will be added.

Algorithm: should use a for loop to iterate through the positive integers leading up to the input and
then push each consecutive integer into the array.
*/

function sequence(num) {
  let resultArr = [];

  for (let i = 1; i <= num; i ++) {
    resultArr.push(i);
  }

  return resultArr;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));