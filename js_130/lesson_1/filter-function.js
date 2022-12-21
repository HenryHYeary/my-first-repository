let numbers = [1, 2, 3, 4, 5];

function filter(array, callback) {
  let resultArr = [];

  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      resultArr.push(array[index]);
    }
  }

  return resultArr;
}

const log = console.log;
log(filter(numbers, number => number > 3));
log(filter(numbers, number => number < 0));
log(filter(numbers, () => true));

let values = [1, 'abc', null, true, undefined, 'xyz'];
log(filter(values, value => typeof value === 'string'));