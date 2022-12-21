function filter(array, callback) {
  return array.reduce((accum, elem) => {
    if (callback(elem)) {
      accum.push(elem);
    }

    return accum;
  }, [])
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

function map(array, callback) {
  return array.reduce((accum, elem) => {
    accum.push(callback(elem));
    return accum;
  }, []);
}

let numbers2 = [1, 2, 3, 4, 5];
console.log(map(numbers2, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers2, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers2, () => false));
// => [ false, false, false, false, false ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values2, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]