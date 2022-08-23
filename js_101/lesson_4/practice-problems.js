console.log([1, 2, 3].filter(num => 'hi'));

console.log([1, 2, 3].map(num => {
  num * num;
}));

console.log([1, 2, 3].map(num => num * num));

console.log(['ant', 'bear', 'caterpillar'].pop().length);

console.log([1, 2, 3].every(num => {
  return num = num * 2;
}));

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
console.log(arr.fill(1, 1, 5));
console.log(arr);

console.log(['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
}));

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

let result = {};

function convertToObject (arr) {
  arr.forEach(key => {
    result[key] = arr.indexOf(key);
  });

  return result;
}

console.log(convertToObject(flintstones));

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageValues = Object.values(ages);
let totalAges = 0;

ageValues.forEach(age => totalAges += age);

console.log(totalAges);

console.log(ageValues.reduce((sumAges, currentAge) => sumAges + currentAge, 0));

console.log(Math.min(...ageValues));

let statement = "The Flintstones Rock";

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result2 = {};

charsInStatement.forEach(char => {
  result2[char] = result2[char] || 0;
  result2[char]++;
});

console.log(result2);

// Alternative code to the last problem
 charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

