/*
input: need three classes, pet, owner, and shelter
ouptut: the names of each owner that has adopted from the shelter
the species and name of each adopted animal
the total number of adopted pets for each adopting owner.

Data Structure: pet class needs to take the species and name of the pet
owner needs to take the name of the owner
shelter needs no input

properties: need species and name property for pets
need name for owners
need a separate object to store arrays for each owner in shelter class
need to create arrays for each owner in owner class
need dependencies between these two objects to make sure state is updated properly.
*/

/*
class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }

  toString() {
    return this.name;
  }
}

class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    if (!(this.adoptions.hasOwnProperty(owner))) {
      this.adoptions[owner] = [{species: pet.species, name: pet.name}];
      owner.pets = this.adoptions[owner];
    } else {
      this.adoptions[owner].push({species: pet.species, name: pet.name});
      owner.pets = this.adoptions[owner];
    }
  }

  printAdoptions() {
    for (let owner in this.adoptions) {
      console.log(`${owner} has adopted the following pets:`);
      for (let index = 0; index < this.adoptions[owner].length; index++) {
        console.log(`a ${this.adoptions[owner][index].species} named ${this.adoptions[owner][index].name}`);
      }
      console.log('');
    }
  }
}
*/

// Improved more concise solution

class Pet {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }

  description() {
    return `a ${this.animal} named ${this.name}`
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }

  toString() {
    return this.name;
  }
}

class Shelter {
  constructor() {
    this.adoptions = [];
    this.adopters = [];
  }

  adopt(owner, pet) {
    owner.pets.push(pet);
    if (!this.adopters.includes(owner)) {
      this.adopters.push(owner);
    }
  }

  printAdoptions() {
    this.adopters.forEach(adopter => {
      console.log(`${adopter} has adopted the following pets:`);
      adopter.pets.forEach(pet => {
        console.log(pet.description());
      });
      console.log('');
    });
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);