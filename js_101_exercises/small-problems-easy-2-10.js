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

function stringToSignedInteger (str) {
  let value = 0
  let newStr = str.substring(1);

  if (str.startsWith('-')) {
    value = 0 - stringToInteger(newStr);
  } else if (str.startsWith('+')) {
    value = stringToInteger(newStr);
  } else {
    value = stringToInteger(str);
  }

  return value;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true