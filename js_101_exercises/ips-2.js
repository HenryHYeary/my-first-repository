/*
input: an odd integer
output: a four pointed diamond in an n x n (n is the input integer)

Examples: If 1 is passed as an argument the function should only output a single asterisk
The number of output lines will always match the input integer passed to the function.
The first and subsequent lines leading to the middle and after the middle need varying degrees of padding.
Only padStart should be necessary here

Data structure: will be using console.log for this exercise and should create a variable representing how much padding
is necessary for the current line. Does not seem like the problem requires an independent data structure from the asterisks being logged

Algorithm: As stated above create a loop that starts with Math.floor(num / 2) padding for the start
and decrement downwards until the padding equals zero, calling console.log at every point until then
Then should do the reverse with an incrementing loop that calls console.log on each iteration as well.
*/

function diamond(number) {
  for (let numOfAsterisks = 1; numOfAsterisks <= number; numOfAsterisks += 2) {
    let padding = (number - numOfAsterisks) / 2;
    console.log(' '.repeat(padding) + '*'.repeat(numOfAsterisks));
  }

  for (let numOfAsterisks = number - 2; numOfAsterisks >= 1; numOfAsterisks -= 2)  {
    let padding = (number - numOfAsterisks) / 2;
    console.log(' '.repeat(padding) + '*'.repeat(numOfAsterisks));
  }
}

// Second solution

function diamond2(number) {
  numberSequence(number).forEach(currentNumber => {
    console.log(`${' '.repeat((number - currentNumber) / 2)}${'*' + ' '.repeat(currentNumber) + '*'}`);
  });
}

function numberSequence(number) {
  let resultArr = [];
  let increment = 2;
  let currentNumber = 1;

  while (currentNumber > 0) {
    resultArr.push(currentNumber);
    if (currentNumber === number) {
      increment = -2;
    }
    currentNumber += increment;
  }

  return resultArr;
}

// further exploration

function hollowDiamond(number) {
  if (number === 1) {
    console.log('*');
  } else {
    let prependedSpaces = numberSequence(number).map(currentNumber => {
      return (number - currentNumber) / 2;
    });
  
    spaceNumberSequence(number).forEach((currentNumber, index) => {
      if (currentNumber === 0) {
        console.log(`${' '.repeat((number - 1) / 2) + '*'}`);
      } else {
        console.log(`${' '.repeat(prependedSpaces[index]) + '*' + ' '.repeat(currentNumber) + '*'}`);
      }
    });
  }
}

function spaceNumberSequence(number) {
  let resultArr = [];
  let increment = 2;
  let currentNumber = 1;

  resultArr.push(0);
  
  while (currentNumber > 0) {
    resultArr.push(currentNumber);
    if (currentNumber === number - 2) {
      increment = -2;
    }
    currentNumber += increment;
  }

  resultArr.push(0);

  return resultArr;
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(9);