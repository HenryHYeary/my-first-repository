
// input: 6 numbers chosen by the user
// output: prompt that tells the user whether the last number appears in the first five numbers.

// Examples: the problem seems to impicitly request that we add all five numbers into an array and then join the array to display as its name at the end of the message.
// Data Structures: need an empty array to push the values into, and need to ideally convert the values to strings to streamline naming process.
// Algorithm: after converting the user inputted numbers to strings and then adding the strings to an array we should use the .includes() method to verify whether the number appears in the first five.
// We can use an if statement to print out the correct log saying whether or not the number is contained in the array
// Finally we can use the .join() method to list the first five after the target (last) number.

const rlSync = require('readline-sync');

let num1 = rlSync.question('Enter the first number: ');
let num2 = rlSync.question('Enter the second number: ');
let num3 = rlSync.question('Enter the third number: ');
let num4 = rlSync.question('Enter the fourth number: ');
let num5 = rlSync.question('Enter the fifth number: ');
let lastNum = rlSync.question('Enter the last number: ');

let firstFive = [num1, num2, num3, num4, num5];

if (firstFive.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${firstFive.join()}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${firstFive.join()}.`);
}


