/*
input: two arrays containing multiple values.
output: a single array that contains the union of the values from the original two (no repeat values).

Examples: Only example provided uses numbers, however this should also work with strings theoretically? 
Should be no repeated values even if there are duplicates in the original array.

Data Structure: Probably best to initially create a result array that is blank so I can push the non repeating values into it.

Algorithm: should use an if statement and array.includes() to determine whether or not a value has been repeates (use boolean ! operator).
*/

function union(arr1, arr2) {
  let result = [];

  arr1.forEach(value => result.push(value));

  arr2.forEach(value => {
    if (!arr1.includes(value)) {
      result.push(value);
    }
  });
  
  return removeRepeats(result);
}

function removeRepeats(arr) {
  let uniqueValues = arr.filter((value, i) => {
    return arr.indexOf(value) === i;
  });

  return uniqueValues;
}

console.log(union([1, 3, 5], [3, 6, 9]));
console.log(union(['apple', 'bat', 'cat'], ['android', 'bat', 'carpet']));
console.log(union([1, 1, 2, 3, 4], [5, 6, 6, 7, 1]));