
let numbers = [1, 2, 3, 4];

console.log(numbers.length = 0);
console.log(numbers.splice(0, numbers.length));

while (numbers.length) {
  numbers.pop();
}

console.log(numbers);

console.log([1, 2, 3] + [4, 5]);

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValid = color => color === 'blue' || color === 'green';

const isColorValid2 = color => ['blue', 'green'].includes(color);