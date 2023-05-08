/*
input: no input necessary
output: a string stating Teddy's age which must be between 20 and 200
inclusive

Examples: "Teddy is 25 years old!"
          - Should be simple string interpolation with a randomly generated
          value in the middle.

Data Structure: Should set up the function to have a minimum and maximum value
                that the random number can be between.
                - Should find the difference between the minimum and the max and
                store it in a variable. Add one to the difference as the total range
                - Multiply Math.random() with the total range to get the correct value.
                - Add the minimum side of the range to the generated value to ensure
                that the value stays in the correct range.
*/

// function teddyBirthday(min, max) {
//   let range = max - min + 1;

//   let randomVal = Math.round(Math.random() * range);

//   let randomAge = randomVal + min;

//   console.log(`Teddy is ${randomAge} years old!`);
// }

// teddyBirthday(20, 200);
// teddyBirthday(15, 50);

// More robust version of the solution
// Remember the values being out of order could be an implicit req
// on interview. What if both values are the same?

function teddyBirthday(limit1, limit2) {
  let max;
  let min;

  if (limit1 > limit2) {
    max = limit1;
    min = limit2;
  } else if (limit1 < limit2) {
    max = limit2;
    min = limit1;
  } else {
    return limit1;
  }

  let range = max - min + 1;
  let randomVal = Math.round(Math.random() * range);

  let randomAge = randomVal + min;

  console.log(`Teddy is ${randomAge} years old!`);
}

teddyBirthday(200, 20);
teddyBirthday(50, 15);