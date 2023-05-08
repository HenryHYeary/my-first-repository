/*
input: an integer describing the middle width of a diamond
output: a multi line string representation of the diamond.

Examples: if one is the input then only log one asterisk,
examples only deal with positive integers and the argument will
always be an odd integer.
Also need to care about the prepended spaces

Data structure: use two functions, one to increment the number of
asterisks and spaces and another to decrement them. First should be a for
loop that goes up until it reaches the number, the second should be 
a for loop that goes down until it reaches zero or one.

Algorithm: spaces of incrementing function should start at the number
-1 divided by 2. Asterisks always start at 1. Spaces decrease by one on
every odd number, while asterisks decrease by 2 on every odd number.

The incrementing function should start at the number - 2 and add a space
every iteration as well as subtract two asterisks every iteration until the
number is equal to 1.
*/

function diamond(number) {
  increment(number);
  decrement(number);
}

function increment(number) {
  let spaces = (number - 1) / 2;

  for (let count = 1; count <= number; count += 2) {
    console.log(`${' '.repeat(spaces)} ${'*'.repeat(count)}`);
    spaces -= 1;
  }
}

function decrement(number) {
  let spaces = 1;

  if (number === 1) {
    return;
  } else {
    for (let count = number - 2; count >= 1; count -= 2) {
      console.log(`${' '.repeat(spaces)} ${'*'.repeat(count)}`);
      spaces += 1;
    }
  }
}


diamond(1);
diamond(3);
diamond(5);
diamond(7);
diamond(9);