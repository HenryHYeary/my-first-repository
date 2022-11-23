let RECTANGLE = {
    area: function() {
      return this.width * this.height;
    },
    perimeter: function() {
      return 2 * (this.width + this.height);
    },
  };
  
  function Rectangle(width, height) {
    Object.setPrototypeOf(this, RECTANGLE);
    this.width = width;
    this.height = height;
    this.area = this.area();
    this.perimeter = this.perimeter();
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
  
  console.log(a.area().toFixed(2)); // => 28.27
  console.log(b.area().toFixed(2)); // => 50.27
  console.log(a.hasOwnProperty('area')); // => false
  
  function Ninja() {
    this.swung = false;
  }
  
  // Add a swing method to the Ninja prototype which
  // modifies `swung` and returns the calling object
  
  Ninja.prototype.swing = function() {
    this.swung = true;
    return this;
  }
  
  let ninjaA = new Ninja();
  let ninjaB = new Ninja();
  
  console.log(ninjaA.swing().swung);      // logs `true`
  console.log(ninjaB.swing().swung);      // logs `true`
  
  let ninjaD;
  
  {
    const Ninja = function() {
      this.swung = false;
    };
  
    ninjaC = new Ninja();
  }
  
  ninjaD = new ninjaC.constructor();
  
  console.log(ninjaC.constructor === ninjaD.constructor); // => true
  
  function User(first, last) {
    if (!(this instanceof User.prototype.constructor)) {
      return new User(first, last);
    }
  
    this.name = first + ' ' + last;
  }
  
  let name = 'Jane Doe';
  let user1 = new User('John', 'Doe');
  let user2 = User('John', 'Doe');
  
  console.log(name);         // => Jane Doe
  console.log(user1.name);   // => John Doe
  console.log(user2.name);   // => John Doe