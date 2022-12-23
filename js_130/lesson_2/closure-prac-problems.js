// Exercise 5

function makeMultipleLister(number) {
  return function() {
    for(let count = number; count < 100; count += number) {
      console.log(count);
    }
  };
}

let lister = makeMultipleLister(17);
lister();

// Exercise 6

let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

add(1);
add(42);
subtract(39);
add(6);

// Exercise 8

function later(func, arg) {
  return () => func(arg);
}

const logger = message => console.log(message);
let logWarning = later(logger, 'The system is shutting down!');
logWarning();

// Exercise 9

function later2(func, arg) {

}