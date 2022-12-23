// Exercise 5

// Original var declared code to emulate

// function foo(condition) {
//   console.log(bar);

//   qux = 0.5772;

//   if (condition) {
//     var qux = 3.1415;
//     console.log(qux);
//   } else {
//     var bar = 24;

//     var xyzzy = function() {
//       var qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    var xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

// Exercise 6

// Code to illustrate hoisting if it were a real process

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

function Pet(name, image) {
  this.name = name;
  this.image = image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
}

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image('cat.png');
pudding = new Pet('Pudding', catImage);