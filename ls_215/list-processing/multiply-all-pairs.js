/*
input: two arrays
output: a new array containing the products of all of the
combinations of number pairs that exist between the two arrays

Examples: neither argument will be an empty array, array must be sorted
in numerical order as result. No multiplication will occur between
pairs in the same array, duplicates must be recorded.

Data Structure: should try to use higher level abstraction techniques to
determine output.
However for now I'll create an external array that I will push all of the
values to.

Algorithm: iterate through first array and multiply each value by all of
the values in the other array. Push the subsequent values to the external array
and then return the external array.
Separate out these steps to separate functions.
*/

function multiplyAllPairs(array1, array2) {
  let resultArr = [];

  array1.forEach(val => {
    resultArr = resultArr.concat(multiplyValByArray(val, array2));
  });

  return resultArr.sort(sortValuesNumerically);
}

function multiplyValByArray(val, array) {
  return array.map(element => val * element);
}

function sortValuesNumerically(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}

const log = console.log;

log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));

// Book solution
// function multiplyAllPairs(array1, array2) {
//   const result = [];

//   array1.forEach(number1 => {
//     array2.forEach(number2 => {
//       result.push(number1 * number2);
//     });
//   });

//   return result.sort((a, b) => a - b);
// }

