
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