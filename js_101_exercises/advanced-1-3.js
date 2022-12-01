/*
input: a matrix (nested array) of any column and row length
output: the transpose of the input matrix

Examples: The output should be a completely new matrix and not mutate the original
If one row is passed to the function then every value should be placed in a column (separate internal matrix)
If every value is contained in a row then the return value should all be in one internal array.

Data Structure: should create an empty transposed array that pushes the correct number of columns to the outer array.

Algorithm: Should use the matrix.length to push the correct number of empty inner arrays to the transposed outer array.
However if the matrix.length is one then a separate inner array should be created for each value
Additionally if every row/column is in an individual array then it should be combined into one array. 
*/

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function transpose(matrix) {
  let transposed = [];
  let numOfRows = matrix.length;
  let numOfColumns = matrix[0].length;

  for (let rowI = 0; rowI < numOfColumns; rowI++) {
    transposed.push([]);
  }

  for (let rowI = 0; rowI < numOfRows; rowI++) {
    for (let colI = 0; colI < numOfColumns; colI++) {
      transposed[colI].push(matrix[rowI][colI]);
    }
  }
  
  return transposed;
}

console.log(transpose(matrix));
console.log(matrix);

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));

