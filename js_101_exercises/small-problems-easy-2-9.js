
function stringToInteger(str) {
  const DIGITS = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,
  };
  let arrayOfDigits = str.split('').map(char => DIGITS[char])
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit))
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

function hexadecimalToInteger(str) {
  const DIGITS = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,
    A: 10,
    a: 10,
    B: 11,
    b: 11,
    C: 12,
    c: 12,
    D: 13,
    d: 13,
    E: 14,
    e: 14,
    F: 15,
    f: 15,
  };
  let arrayOfDigits = str.split('').map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (16 * value) + digit))
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871);