
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let newObj = {};

arr.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];

  newObj[key] = value;
});

console.log(newObj);