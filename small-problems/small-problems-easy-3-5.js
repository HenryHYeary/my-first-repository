function triangle(sideLength) {
  let spaces = sideLength - 1;
  let stars = 1;
  while (sideLength > 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    sideLength -= 1;
  }  
}


triangle(5);

// create a right triangle with sides equal to the input
// input: length of sides in asterisks
// output: triangle formed by asterisks with side lengths equal to input

// data structures: strings, and output will be a set of strings as well.
// algorithm: Need to use an iterative method to make sure a string with blank spaces is created totaling the number specified -1 with an asterisk on the end
// subsequent lines will put one more asterisk on the line from  their position relative to the end until one whole line of asterisks is made.
// use console.log() to output the full triangle with each line of asterisks.