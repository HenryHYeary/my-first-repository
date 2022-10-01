/*
input: a matrix of any row and column length
output: the 90 degree rotation of the input matrix

Examples: looking at the value changes it looks a 90 degree rotation can be described
as a matrix transpose and then a reversal of the order of the elements across each new row.
Also rotate should be able to be called multiple times in a row to continuously rotate the matrix.

Data Structure: should use the three variables that were declared in the previous exercise as well
as go through the original steps to transpose the matrix. Make sure the correct number of empty internal arrays
are added to the transposed outer array and measure the row and column length of the original matrix.

Algorithm: should use the original for loop to add the correct number of new rows according to the column length
Should also use the nested for loop to procedurally add the correct column indexes into the new rows being formed.
Should then take each subArray of the function and reverse those subArrays which should give the final result of the 90 degree
rotation of the original matrix.
*/

function rotate90(matrix) {
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

  transposed.forEach(subArr => subArr.reverse());

  return transposed;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(rotate90(matrix1));
console.log(rotate90(matrix2));
console.log(newMatrix3);

