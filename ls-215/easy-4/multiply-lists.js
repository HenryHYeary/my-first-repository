/*
input: two arrays of equal length
output: the product of each element in the first array and
second in an array of equal length

Examples: What if there are a different number of arguments
what if they are not arrays?
What if some elements of the arrays are not numbers?
What if some of the lengths are different?

Data Structure: map the first array to the product of the element
with the same element in the other array.
return the array
*/

const log = console.log;
log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
log(multiplyList([2, 2, 2], [4, 4, 4])); // [8, 8, 8]
log(multiplyList([5], [4])); // [20]

function multiplyList(arr1, arr2) {
  return arr1.map((num, index) => num * arr2[index]);
}