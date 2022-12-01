class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);
const log = console.log;

log(fakeCat instanceof Cat);
log(fakeCat.name);
log(fakeCat.speaks());