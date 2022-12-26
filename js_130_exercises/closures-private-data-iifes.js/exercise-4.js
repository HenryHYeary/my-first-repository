function delegate(obj, method) {
  let additionalArgs = [].slice.call(arguments, 2);

  return function () {
    obj[method](additionalArgs);
  };
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();

foo.bar = function() { console.log('changed'); };

baz.qux();