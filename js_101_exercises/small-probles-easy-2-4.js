const multiply = (num1, num2) => num1 * num2;

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);