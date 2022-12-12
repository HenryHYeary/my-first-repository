class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}


let bike = new Motorcycle('Kawasaki', 'Jet');
let car = new Car('Ford', 'Focus');
let truck = new Truck('Dodge', 'Ram', 200);

const log = console.log;
log(bike.info());
log(car.info());
log(truck.info());
log(truck.payload);
log(bike.wheels);
log(car.wheels);
log(truck.wheels);