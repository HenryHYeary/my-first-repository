// let count = [1, 2, 3, 4, 5];
// let filtered = count.filter((number, index, array) => number % 2 === 0);
// console.log(filtered);

// Practice problem
function myFilter(array, func) {
  let newArray = [];

  array.forEach(value => {
    if (func(value)) newArray.push(value);
  });

  return newArray;
}

let isPythagoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let returnVal = myFilter([
  { a: 3, b: 4, c: 5},
  { a: 5, b: 12, c: 13},
  { a: 1, b: 2, c: 3}  
], isPythagoreanTriple);

console.log(returnVal);

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));