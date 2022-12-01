/*
input: two sorted arrays
output: a new array that contains all of the elements from both
input arrays sorted in order.

Examples: Cannot provide a solution that requires you to sort the result array
Must build the result array one element at a time in sorted order.
Solution should not mutate the original array.
Should create an initial outer array with the original two arrays pushed to it so they can be iterated through
simultaneously.

Data Structure: Should declare a variable equal to a blank array that will serve as the result array.
Need to figure out a way to iterate through both arrays simultaneously and compare the arrays
Can accomplish that using a nested array and iterating through both elements simultaneously.
Should take a value from the first array and iterate through the whole second array to compare values.
If any of the values of the second array are larger than the first array then append the given value to the array
*/

// The thought process above did not work out but wanted to include it in the solution page regardless.

function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] <= copy2[0]) {
      result.push(copy1.shift());
    } else {
      result.push(copy2.shift());
    }
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(merge([1, 5, 9], [2, 6, 8]));
console.log(merge([1, 1, 3], [2, 2]));
console.log(merge([], [1, 4, 5]));
console.log(merge([1, 4, 5], []));