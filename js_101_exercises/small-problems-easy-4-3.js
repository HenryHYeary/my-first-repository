
// input: age of user and desired retirement age (both user inputs)
// output: string stating the current year as well as the target retirmenet year, as well as one final string stating how many years of work are left
// Examples: current year should be implicitly included into the function (not user input)
// Data structures: variable for age, var for target retirement age, var for current year plus the difference between current age and retirement age.
// finally one var representing the difference to be logged at the last line.

const rlSync = require('readline-sync');

let currentAge = rlSync.question('What is your age? ');
let targetRetirementAge = rlSync.question('At what age would you like to retire? ');

let today = new Date();

let currentYear = today.getFullYear();

let workTimeLeft = targetRetirementAge - currentAge;

console.log(`It's ${currentYear}. You will retire in ${currentYear + workTimeLeft}.`);
console.log(`You have only ${workTimeLeft} years of work to go!`);