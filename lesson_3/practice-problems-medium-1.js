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

let buffer = [1, 2, 3, 4, 5];

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function rollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer1(buffer, 5, 6));
console.log(rollingBuffer2(buffer, 5, 6));

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

console.log(Number.isNaN(nanArray[0]));

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male'},
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' },
};

function messwithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember['age'] += 42;
    familyMember['gender'] = 'other';
  });
}

messwithDemographics(munsters);

console.log(munsters);

function rps(fist1, fist2) {
  if (fist1 === 'rock') {
    return fist2 === 'paper' ? 'paper' : 'rock';
  } else if (fist1 === 'paper') {
    return fist2 === 'scissors' ? 'scissors' : 'paper';
  } else {
    return fist2 === 'rock' ? 'rock' : 'scissors';
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

function foo(param = 'no') {
  return 'yes';
}

function bar(param = 'no') {
  return param === 'no' ? 'yes' : 'no';
}

console.log(bar(foo()));