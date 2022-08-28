// input: a positive integer
// output: a string of alternating ones and zeroes
// evens end on zeroes odds end on ones
// should use an index initially equal to 0 for the iteration in this problem
// ouput of ones and zeroes should be aligned with that index
// should use a blank string as the result string and then add a one or a zero to that string

function stringy(length) {
  let result = '';

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
