/* input: an array with an optional delimiter argument as well as an optional conjunction argument to be used before the final element.
 output: a list of the remaining blank squares separated by default by commas with the final conjunction 'and' or the optional delimiter and an optional conjunction.

Examples: if no elements are passed into the array then the function should return an empty string.
If a single element is passed into the array then it should only return that element with no conjunction or delimiter.

Data Structure: the function should use a blank string to build off of and the default join function can be used to form the bulk of the string.
The second and third arguments should use a delimiter and conjunction variable so the input can be passed successfully into the string.

Algorithm: Combine the joined string form of the initial array, making sure the internal join function takes the optional delimiter input (if provided).
Then make sure the join function is only a substring and ends on the second to last element, adding the conjunction and the last element as the final two parts of the string.
*/

// original solution

/*
function joinOr(arr, delimiter, conjunction) {
  let joinedString = arr.join(delimiter);
  let joinedStringNoArg = arr.join(', ');
  let finalElement = String(arr[arr.length - 1]);

  if (arr.length <= 1) {
    return arr.join()
  } else if (arr.length === 2) {
    return `${String(arr[0])} or ${String(arr[1])}`
  }

  if (!delimiter && !conjunction) {
    return `${joinedStringNoArg.substring(0, joinedStringNoArg.length - 2)} or ${finalElement}`;
  } else if (!delimiter) {
    return `${joinedStringNoArg.substring(0, joinedStringNoArg.length - 2)} ${conjunction} ${finalElement}`
  } else if (!conjunction) {
    return `${joinedString.substring(0, joinedString.length - 2)} or ${finalElement}`
  } else {
    return `${joinedString.substring(0, joinedString.length - 2)} ${conjunction} ${finalElement}`
  }
}

console.log(joinOr([1, 2, 3])); 
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
console.log(joinOr([]));
console.log(joinOr([5]));
console.log(joinOr([1, 2]));
*/

// streamlined solution based on help from course

function joinOr(arr, delimiter = ', ', conjunction = 'or') {
  let finalElement = String(arr[arr.length - 1]);
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return arr.join();
    case 2:
      return `${String(arr[0])} ${conjunction} ${String(arr[1])}`;
    default:
      return `${arr.slice(0, arr.length - 1).join(delimiter)} ${conjunction} ${finalElement}`;
  }
}

console.log(joinOr([1, 2, 3])); 
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
console.log(joinOr([]));
console.log(joinOr([5]));
console.log(joinOr([1, 2]));