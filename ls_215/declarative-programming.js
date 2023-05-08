// purely imperative code
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   if (array[index] % 2 === 1) {
//     newArray.push(array[index]);
//   }
// }

// console.log(newArray);

// imperative style with function abstractions
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// for (let index = 0; index < array.length; index++) {
//   if (isOddNumber(array[index])) {
//     newArray.push(array[index]);
//   }
// }

// console.log(newArray);

// function isOddNumber(number) {
//   return number % 2 === 1;
// }

// iteration focused abstraction
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];

// array.forEach(element => {
//   if (isOddNumber(element)) {
//     newArray.push(element);
//   }
// });

// console.log(newArray);

// function isOddNumber(number) {
//   return number % 2 === 1;
// }

// Filter abstraction
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = array.filter(element => isOddNumber(element));
// console.log(oddNumbers);

// function isOddNumber(number) {
//   return number % 2 === 1;
// }

// Alternate filter abstraction
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = array.filter(isOddNumber);

console.log(oddNumbers);

function isOddNumber(number) {
  return number % 2 === 1;
}