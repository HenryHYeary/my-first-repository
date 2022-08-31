
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// mutating the original array

/*
arr.forEach(subArr => {
  subArr.map( element => {
    if (typeof element === 'string') {
      return subArr.sort();
    } else if (typeof element === 'number') {
      return subArr.sort((a, b) => a - b);
    }
  });
});

console.log(arr);

*/

// returning a new array

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(newArr);

