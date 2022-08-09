let readlineSync = require('readline-sync');

console.log('Enter the length of the room in meters: ');
length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

meterArea = length * width

feetArea = (length * width) * 10.7639

console.log(`The area of the room is ${meterArea.toFixed(2)} square meters (${feetArea.toFixed(2)}).`);