/*
input: a value of any type
output the name of the constructor of the value passed in.

Examples: should work with strings, arrays, and booleans specifically for this problem

Data Structure: Shouldn't need to modify console itself, should access the prototype and constructor
properties and then log out the name of the property.
*/

let val1 = 'Hello';
let val2 = [1, 2, 3];
let val3 = {name: 'Srdjan'};

const log = console.log;

log(val1.constructor.name);
log(val2.constructor.name);
log(val3.constructor.name);