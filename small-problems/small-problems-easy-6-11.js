/*
input: an array
output: the input array but with the values in reversed order (exactly the same as the reverse function).

Examples: If a string is passed in as a single element, the characters of the string do not need to be reversed.
If a blank array is passed in as the argument then the function should return a blank array.

Data Structure: should create a new blank list to add of the elements of the function into.

Algorithm: should reverse iterate through the list using a for loop and push each element in that way.
*/

function reverse(arr) {
  let resultArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result);

// should mutate original array. Will have to think on how to do this.