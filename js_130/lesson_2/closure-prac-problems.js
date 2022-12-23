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
  return function() {
    return func(arg);
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, 'The system is shutting down!');
logWarning();

// Exercise 9

function later2(func, arg) {
  return function(nextArg) {
    return func(arg, nextArg);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30);

// Exercise 10

"use strict";

function bind(object, func) {
  return function() {
    return func.call(object);
  } 
}

let obj = {}
let boundFunc = bind(obj, function() {
  this.foo = 'bar';
});

boundFunc();
console.log(obj);