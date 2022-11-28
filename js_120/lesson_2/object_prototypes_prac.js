function assignProperty(object, property, value) {
  while (object !== null) {
    if (object.hasOwnProperty(property)) {
      object[property] = value;
    }

    object = Object.getPrototypeOf(object);
  }
}

let fooA = {bar: 1};
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, 'bar', 2);
console.log(fooA.bar);
console.log(fooC.bar);

assignProperty(fooC, 'qux', 3);
console.log(fooA.qux);
console.log(fooC.qux);
console.log(fooA.hasOwnProperty('qux'));
console.log(fooC.hasOwnProperty('qux'));