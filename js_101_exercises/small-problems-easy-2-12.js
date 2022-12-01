const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let result = '';
  
  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}

function signedIntegerToString (num) {
  switch(Math.sign(num)) {
    case -1:
      return `-${integerToString(-num)}`;
    case +1:
      return `+${integerToString(num)}`;
    default:
      return(integerToString(num));
  }
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');