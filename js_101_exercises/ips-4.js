/*
input: an odd integer greater than or equal to 7
output: an eight pointed star in an NxN grid (n characters by n lines)

Examples: All lines except for the middle line will have three total asterisks in them
The middle line will have n number of asterisks and no spaces. The challenge will be finding out how
to increment the number of spaces between asterisks correctly on each line.

Data Structure: Could potentially create an array of numbers that will signify how many spaces to place in between each
asterisk. This would need to be done by correctly incremeting and decrementing a count variable to push each correct number to the array.
Should perform a similar process to create an array of the number of correct prepending spaces before the first asterisk appears.
Should likely extract these processes to separate helper functions.

Algorithm: Should first create the correct helper functions to find the correct number of spaces both before and in between
each asterisk on every line of the resulting eight pointed star.
*/


function star(number) {
  for (let currentLog = 0; currentLog < Math.floor(number / 2); currentLog++) {
    console.log(`${' '.repeat(spacesBetween(number).reverse()[currentLog]) + ('*' + ' '.repeat(spacesBetween(number)[currentLog])).repeat(3)}`);
  }

  console.log('*'.repeat(number));

  for (let currentLog = 0; currentLog < Math.floor(number / 2); currentLog++) {
    console.log(`${' '.repeat(spacesBetween(number)[currentLog]) + ('*' + ' '.repeat(spacesBetween(number).reverse()[currentLog])).repeat(3)}`);
  }
}


// can be reversed for second half of star output
// can also be reversed for the correct number of prepending spaces on each line for current half of output
function spacesBetween(number) {
  let count = Math.floor((number - 3) / 2);
  let sequenceArr = [];

  for (let index = 0; index < Math.floor(number / 2); index++) {
    sequenceArr.push(count);
    count--;
  }

  return sequenceArr;
}

function printAsterisks(spaceSequence1, spaceSequence2) {
  for (let currentLog = 0; currentLog < Math.floor(number / 2); currentLog++) {
    console.log(`${' '.repeat(spaceSequence1.reverse()[currentLog]) + ('*' + ' '.repeat(spaceSequence2[currentLog])).repeat(3)}`);
  }
}

star(7);
star(9);
star(11);
