/*
input: two array arguments containing a list of numbers.
output: a new array that contains the product of each pair of numbers from the arguments that have the same index.

Examples: the length of the array should match that of the original arrays passed as arguments.

Data Structure: should create a new array to append each product to.

Algorithm: should use a for or forEach loop to iterate through every index and multiple both values from each array.]
Then should push each of those products as a new value at the same index in the result array.
*/

function multiplyList(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    resultArr.push(arr1[i] * arr2[i]);
  }

  return resultArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));