/*
input: an array
output: the input array but with the values in reversed order (exactly the same as the reverse function).

Examples: If a string is passed in as a single element, the characters of the string do not need to be reversed.
If a blank array is passed in as the argument then the function should return a blank array.

Data Structure: should mutate the original array so no need to create a new result array.

Algorithm: should use the  arr.sort() method to sort from largest index to smallest index.
*/

function reverse(arr) {
  
  arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a));

  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result);
console.log(list === result);

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

// should mutate original array. Will have to think on how to do this.