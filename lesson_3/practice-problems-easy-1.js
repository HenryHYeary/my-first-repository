let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];

console.log(numbers);

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let string = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

console.log(string);

console.log(false == '0');
console.log(false === '0');

let additionalAges = { Marilyn: 22, Spot: 237};

let allAges = Object.assign(ages, additionalAges);

console.log(allAges);

let str3 = "Few things in life are as important as house training your pet dinosaur.";

let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes('Dino'));
console.log(str4.includes('Dino'));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino', 'Hoppy');

console.log(flintstones);

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.indexOf('house'));

console.log(advice.slice(0, 39));