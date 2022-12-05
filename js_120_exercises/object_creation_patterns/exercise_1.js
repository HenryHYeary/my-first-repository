/*
String representation: must change toString()? Or assign Object.prototype
a name property

while obj isn't null
  obj is reassigned to it's prototype
  obj is added to an array
*/

// name property added to make objects easier to identify
let foo = {name: 'foo'};
foo.ancestors = function() {
  let resultArr = [];

  let object = foo;
  while (object !== Object.prototype) {
    object = Object.getPrototypeOf(object);
    resultArr.push(object.name);
  }

  return resultArr;
}
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

const log = console.log;

log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']