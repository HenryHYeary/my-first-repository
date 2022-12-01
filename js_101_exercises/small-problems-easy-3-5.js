
// input: n number of stars that sides of triangle should be equal to
// output: triangle with number of stars on each side comprised of blank spaces and stars
// Examples: hypotenuse should always be facing left, total number of stars will increment by one for each line printed
// Data: should use repeat method in conjunction with console.log() to avoid the need of of creating an empty string variable and logging it every line.
// Can keep track of total number of stars and spaces needed with seperate variables, should also decrease height on each iteration
// Algorithm: stars variable should start at one, blank spaces variable should start at height minus one,
// use do while to make sure lines keep logging until the length is decremented to zero

function triangle (length) {
  let stars = 1;
  let spaces = length - 1;

  do {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    stars ++;
    spaces --;
    length --;
  } while (length > 0);
}

triangle(5);
triangle(9);