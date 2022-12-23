// Exercise 2

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// Exercise 3

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);

// Exercise 4

(function(number) {
  for (let count = number; count >= 0; count--) {
    console.log(count);
  }
})(7);

// Exercise 6

let bar = (function(start) {
  let prod = start;
  return function(factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// Exercise 7

(function countdown(number) {
  console.log(number);

  if (number !== 0) {
    countdown(number - 1);
  }
})(7);