/*
input: a 3x3 matrix in the form of a nested array.
output: the transpose of the matrix (columns are now rows and vice versa).

Examples: the output should be a completely new array and the function should not mutate the original
matrix passed to the function.

Data Structure: declare an empty array variable to which each array of newly ordered values will be pushed to.
Declare other empty array variables for each row and then plan on passing those rows to the outerArray variable.

Algorithm: Use a forEach loop on the input matrix to then iterate through every number, each consecutive value for an internal array
should be pushed as the first value for its respective index in the new internal arrays that will represent the transpose.
Once all of these values are pushed in the correct order, push those values to the outerArray variable and then return that variable as the function's output.
*/

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let zeroIndexArr = [];
  let oneIndexArr = [];
  let twoIndexArr = [];

  matrix.forEach(row => {
    for (let i = 0; i < row.length; i++) {
      switch(i) {
        case 0: zeroIndexArr.push(row[i]);
        break;
        case 1: oneIndexArr.push(row[i]);
        break;
        case 2: twoIndexArr.push(row[i]);
        break;
      }
    }
  });

  let outerArray = [ zeroIndexArr, oneIndexArr, twoIndexArr];
  return outerArray;
}

console.log(transpose(matrix));
console.log(matrix);