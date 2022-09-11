/*
input: two non empty arrays with the same number of elements.
output: a new array that contains all elements from both array arguments, with each element taken in alternation.

Examples: example seems to match the description of the problem.

Data Structures: should create a new array to append each value to and return at  the end of the function.

Algorithm: Should use a for loop and push a value from the first array first and then a value from the second array next.
Finally return the result array at the end.
*/

function interleave(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    resultArr.push(arr1[i]);
    resultArr.push(arr2[i]);
  }

  return resultArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));

function interleave2(arr1, arr2) {
  let resultArr = [];

  arr1.forEach((element, i) => {
    resultArr.push(element, arr2[i]);
  });

  return resultArr;
}

console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));
