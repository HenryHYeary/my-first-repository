function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  for (let index = 0; index < obj1Keys.length; index++) {
    let key = obj1Keys[index];
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    } else {
      obj2Keys.splice(obj2Keys.indexOf(key), 1);
    }
  }

  return true;
}

const log = console.log;

log(objectsEqual({a: 'foo'}, {a: 'foo'}));
log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));
log(objectsEqual({}, {}));
log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));