function first() {
  return {
    prop1: 'hi there'
  };
}

function second() {
  return
  {
    prop1:'hi there'
  };
}

console.log(first());

console.log(second());

let object = { first: [1] };
let numArray = object['first'];
numArray.push(2);

console.log(numArray);
console.log(object);

let object2 = { first: [1] };

let numArray2 = object2['first'].slice();
numArray2.push(2);

console.log(numArray2);

let object3 = { first: [1] };
let numArray3 = object3['first'].concat();
numArray3.push(2);

console.log(numArray3);

function messWithVars (one, two, three) {
  one = two;
  two = three;
  three - one;
}

let one = ['one'];
let two = ['two'];
let three = ['three'];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

function messWithVars2(one, two, three) {
  one = ['two'];
  two = ['three'];
  three = ['one'];
}

messWithVars2(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

function messWithVars3(one, two, three) {
  one.splice(0, 1, 'two');
  two.splice(0, 1, 'three');
  three.splice(0, 1, 'one');
}

messWithVars3(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split('.');
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}