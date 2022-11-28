function createCar(make, fuelLevel, engineOn) {
  return {
    make,
    fuelLevel,
    engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    },

    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        fuelLevel = 1;
      }
    },

    describe() {
      console.log(`Make: ${this.make}`);
      console.log(`Fuel Level: ${this.fuelLevel}`);
      console.log(`Engine Status: ${this.engineOn ? 'on' : 'off'}`);
    }
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

raceCar1.describe();
raceCar2.describe();