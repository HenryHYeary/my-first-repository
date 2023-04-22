/*
input: a lower limit and an upper limit for the odd numbers to be logged
out
output: all of the odd numbers that are in between the upper limit and lower limit
*/

function oddNumbers(lowerLim, upperLim) {
  for (let count = lowerLim; count <= upperLim; count++) {
    if (count % 2 === 1) {
      console.log(count);
    }
  }
}

oddNumbers(44, 99);