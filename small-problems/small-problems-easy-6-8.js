/*
input: one integer greater than or equal to zero, and another integer of any value
output: an array containing the same number of elements as the first argument, with the value of each element being the second number multipled by its position in the array.

Example: if a value of zero is passed in as the count number then it should return a blank array.
If zero is passed in as a multiple then all elements in the array should be zero.

Data Structure: should create a blank array to which all of the elements will be appended.

Algorithm: use a for loop that iterates from 1 up to the count value, and for each iteration multiply the second argument by its position.
*/

function sequence(count, multiple) {
  let resultArr = [];

  for (let i = 1; i <= count; i++) {
    resultArr.push(i * multiple);
  }

  return resultArr;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));