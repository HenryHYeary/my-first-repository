
let rlSync = require('readline-sync');

console.log('Enter a noun: ');
let noun = rlSync.question();

console.log('Enter a verb: ');
let verb = rlSync.question();

console.log('Enter an adjective: ');
let adjective = rlSync.question();

console.log('Enter an adverb: ');
let adverb = rlSync.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
