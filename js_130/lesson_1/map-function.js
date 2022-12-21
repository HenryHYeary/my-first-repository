function map(array, callback) {
  let mappedArr = [];

  for (let index = 0; index < array.length; index++) {
    mappedArr.push(callback(array[index]));
  }

  return mappedArr;
}

let numbers = [1, 2, 3, 4, 5];
const log = console.log;
log(map(numbers, number => number * 3));
log(map(numbers, number => number + 1));
log(map(numbers, () => false));

let values = [1, 'abc', null, true, undefined, 'xyz'];
log(map(values, value => String(value)));