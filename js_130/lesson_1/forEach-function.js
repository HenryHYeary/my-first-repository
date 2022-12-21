"use strict";

let arr = [1, 2, 3, 4];

arr.forEach(value => console.log(value * value));

function forEach(array, callback, thisArg = this) {
  for (let index = 0; index < array.length; index++) {
    callback.call(thisArg, array[index], index, array);
  }
}

forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}



let foo = new Foo('Item: ');

forEach(["a", "b", "c"], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem); TypeError: cannot read properties of undefined
forEach(['a', 'b', 'c'], function(value, index, array) {
  console.log(`After ${value} comes ${array[index + 1]}`);
});