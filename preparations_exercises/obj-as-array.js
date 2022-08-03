let myArray = { 0: 1, 1: 2, 2: 3, length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

let obj = {
    b: 2,
    a: 1,
    c: 3,
  };

let array = Object.keys(obj);
let upperArray = array.map((key) => key.toUpperCase());
console.log(upperArray);

let myProtoObj = {
    foo: 1,
    bar: 2,
  };

let myObj = Object.create(myProtoObj);

myObj.quix = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
    console.log(key);
});

for (let key in myObj) {
    console.log(key);
}

let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
}

function copyObj (sourceObject, keys) {
    let destinationObj = {};

    if (keys) {
        keys.forEach(function(key) {
            destinationObj[key] = sourceObject[key];
        });

        return destinationObj;
    } else {
        return Object.assign(destinationObj, sourceObject);
    }
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);

