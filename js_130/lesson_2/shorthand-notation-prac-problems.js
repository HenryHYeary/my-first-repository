// // Exercise 1

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     qux: qux,
//     baz: baz,
//   };
// }

// // Exercise 2

// function foo() {
//   return {
//     bar: function() {
//       console.log('bar');
//     },

//     qux: function(arg1) {
//       console.log('qux');
//       console.log(arg1);
//     },

//     baz: function(arg1, arg2) {
//       console.log('baz');
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// // Exercise 3

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   }
// }

// let fooObj = foo(1, 2, 3);
// let bar = fooObj.bar;
// let baz = fooObj.baz;
// let qux = fooObj.qux;

// const log = console.log;

// log(bar);
// log(baz);
// log(qux);

// Exercise 4

// function foo(array) {
//   return [
//     array[2],
//     5,
//     array[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);

// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// console.log(bar);
// console.log(qux);
// console.log(baz);

// Exercise 5

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// Exercise 6

function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}  

let result = product(2, 3, 4, 5);

console.log(result);

// Exercise 7

// const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };

// console.log(foo);
// console.log(rest);

// Exercise 8

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const first = obj.first;
// const second = obj.second;
// const rest = { third: obj.third, rest: obj.rest };

// console.log(first);
// console.log(second);
// console.log(rest);

// Exercise 9

function qux() {
  let animalType = 'cat';
  let age = 9;
  let colors = ["black", "white"];

  return {
    type: animalType,
    age,
    colors,
  }
}

let { type, age, colors } = qux();

console.log(type);
console.log(age);
console.log(colors);

// Exercise 10

function stringer(first, second, third, fourth, last) {
  return {
    first,
    last,
    middle: [ second, third, fourth ].sort(),
  }
}

let newObj = stringer(...[1, 2, 3, 4, 5]);

let { first, last, middle } = newObj;

console.log(first);
console.log(last);
console.log(middle);