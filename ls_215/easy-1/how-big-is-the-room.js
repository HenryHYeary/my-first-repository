/*
input: two integers
output: the area of the room in both square meters and square feet

Examples: looks like the conversion factor is 10.7639 sq ft per square meter
should use rlsync module to approach the question correctly.

Data Structure: should assign a length and width variable that are both equal
to the rlsync prompt matching the requested information

Algorithm: multiply the two numbers together and return the square meters to
the second fixed decimal place, multiply that number by the conversion factor
to get the correct square footage as well
*/

const readline = require('readline-sync');

let length = readline.question("Enter the length of the room in meters: ");
let width = readline.question("Enter the width of the room in meters: ");

let sqMetersToFt = 10.7639;

let meterArea = length * width;
let feetArea = meterArea * sqMetersToFt;

console.log(`The area of the room is ${meterArea.toFixed(2)} square meters (${feetArea.toFixed(2)} square feet).`);
