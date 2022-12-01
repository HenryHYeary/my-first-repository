/*
input: grocery list in a two dimensional array (each element has a string for the item and a number for the count).
output: A one dimensional array listing out  each item as many times as the input count specified.

Examples: Arrays should be nested within a larger array for input. Do not need a nested array for output.

Data Structure: should create a blank array variable to push all of the values.

Algorithim: should use a forEach loop to push each value to the blank array as many times as the count specifies.
*/

function byFruit(arr) {
  let resultArr = [];

  arr.forEach(subArr => {
    for (let i = 1; i <= subArr[1]; i++) {
      resultArr.push(subArr[0]);
    }
  });

  return resultArr;
}

console.log(byFruit([['apple', 3], ['orange', 1], ['banana', 2]]));