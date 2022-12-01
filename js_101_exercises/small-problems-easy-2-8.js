function oddities(array) {
  let oddArray = [];
  for (let i = 0; i < array.length; i += 2) {
    oddArray.push(array[i]);
  }

  return oddArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function evens(array) {
  let evenArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}

console.log(evens([2, 3, 4, 5, 6])); 
console.log(evens([1, 2, 3, 4, 5, 6]));
console.log(evens(["abc", "def"]));
console.log(evens([123]));
console.log(evens([]));