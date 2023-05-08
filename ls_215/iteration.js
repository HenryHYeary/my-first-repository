let names = ["Eunice", "Lucas", "Mariana"];
names.forEach((name, index, array) => console.log(name, index, array[index]));


// Practice problem 1
// Problem: need to build a function similar to the forEach built in method
// should take an array and a callback
/*
Examples: The function passed to myforeach should reassign a variable in the outer scope
Data structure: should not need much of your own data structure but should iterate through
the list of values.
Algorithm: Iterate through the array and use the callback on every individual value.
*/

// function myForEach(array, func) {
//   for (let index = 0; index < array.length; index++) {
//     func(array[index], index, array);
//   }
// }

// let min = Infinity;
// let getMin = value => (min = value <= min ? value : min);
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);

// Example for min and max values
// let min = Infinity;
// let max = -Infinity;

// let getMinMax = function(value) {
//   if (value >= max) {
//     max = value;
//   }

//   if (value <= min) {
//     min = value;
//   }
// };

// [4, 5, 12, 23, 3].forEach(getMinMax);

// console.log(min, max);

// anonymous function expression min and max function

let min = Infinity;
let max = -Infinity;

[4, 5, 12, 23, 3].forEach(value => {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});

console.log(min, max);