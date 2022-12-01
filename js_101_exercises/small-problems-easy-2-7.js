function xor(num1, num2) {
  if (num1 && !num2) {
    return true
  } else if (!num1 && num2) {
    return true
  } else {
    return false;
  }
}


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);