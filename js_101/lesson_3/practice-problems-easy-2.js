
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));

let numbers = [1, 2, 3, 4, 5];

numbers.slice().reverse();

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(sortedArray);
console.log(reversedArray);
console.log(numbers);

let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

console.log(numbers2.includes(8));
console.log(numbers2.includes(95));

let famousWords = "seven years ago...";

let fullFamousWords1 = "Four score and " + "seven years ago...";

let fourScoreAnd = "Four score and ";

let fullFamousWords2 = fourScoreAnd.concat(famousWords);

console.log(fullFamousWords1);
console.log(fullFamousWords2);

let array = [1, 2, 3, 4, 5];

array.splice(2, 1);

console.log(array);

let flintstones = ["Fred", "Wilma"];

let flintstonesFull = flintstones.concat(['Barney', 'Betty', 'Bambam', 'Pebbles']);

console.log(flintstonesFull);

let flintstonesObj = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

console.log(Object.entries(flintstonesObj)[2]);

let numbers3 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);