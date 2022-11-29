let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
}

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2);
}

let a = new Circle(3);
let b = new Circle(4);

const log = console.log;

log(a.area().toFixed(2));
log(b.area().toFixed(2));
log(a.hasOwnProperty('area'));

function Ninja() {
  this.swung = false;
}

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

log(ninjaA.swing().swung);
log(ninjaB.swing().swung);

let ninjaA2;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA2 = new Ninja();
}

let ninjaB2 = new ninjaA2.constructor();

log(ninjaA2.constructor === ninjaB2.constructor);

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last)
  }
  
   this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

log(name);
log(user1.name);
log(user2.name);