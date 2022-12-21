function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  for (index; index < array.length; index++) {
    accumulator = callback(accumulator, array[index]);
  }

  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];

const log = console.log;

log(reduce(numbers, (accum, number) => accum + number));
log(reduce(numbers, (prod, number) => prod * number));
log(reduce(numbers, (prod, number) => prod * number, 3));
log(reduce([], (accum, number) => accum + number, 10));
log(reduce([], (accum, number) => accum + number));

let stooges = ['Mo', 'Larry', 'Curly'];
log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));

log(stooges);