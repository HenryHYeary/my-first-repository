for (let padding = 0; padding < 10; padding++) {
  console.log(' '.repeat(padding) + 'The Flintstones Rock!')
}

let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(''));

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
}

factors(0);