/*
String representation: must change toString()? Or assign Object.prototype
a name property

while obj has a name property
  obj's name is added to the array
  obj is reset to it's prototype

array of all objs is returned without the method invoked obj
is combined with Object.prototype
*/


Object.prototype.ancestors = function() {
  let ancestorsArr = [];
  let ancestor = this;

  while (ancestor.hasOwnProperty('name')) {
    ancestorsArr.push(ancestor.name);
    ancestor = Object.getPrototypeOf(ancestor);
  }

  return ancestorsArr.filter(name => name !== this.name).concat(['Object.prototype']);
}
// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

const log = console.log;


log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
log(bar.ancestors());  // returns ['foo', 'Object.prototype']
log(foo.ancestors());  // returns ['Object.prototype']
