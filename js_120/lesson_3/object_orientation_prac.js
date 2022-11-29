// Question 5

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    describeProduct() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },

    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log('New price is invalid.');
      }
    },
  };
}

// Question 1

/*
let scissors = {
  id: 0,
  name: 'scissors',
  stock: 8,
  price: 10,

  // Question 4
  describeProduct() {
    console.log(`=> Name: ${this.name}`);
    console.log(`=> ID: ${this.id}`);
    console.log(`=> Price: $${this.price}`);
    console.log(`=> Stock: ${this.stock}`);
  },

  setPrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log('New price is invalid.');
    }
  },
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,

  describeProduct() {
    console.log(`=> Name: ${this.name}`);
    console.log(`=> ID: ${this.id}`);
    console.log(`=> Price: $${this.price}`);
    console.log(`=> Stock: ${this.stock}`);
  },

  setPrice(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      console.log('New price is invalid.');
    }
  },
};
*/

// Question 6

let scissors = createProduct(0, 'scissors', 8, 10);
let drill = createProduct(1, 'cordless drill', 15, 45);
let jackhammer = createProduct(2, 'jackhammer', 6, 80);

console.log(scissors.stock);
console.log(drill.price);
console.log(jackhammer.id);

// Question 2

function setPrice(product, newPrice) {
  if (newPrice >= 0) {
    product.price = newPrice;
  } else {
    console.log('New price is invalid.');
  }
}

setPrice(scissors, 12);
console.log(scissors.price);

setPrice(drill, -3);

// Question 3

function describeProduct(product) {
  console.log(`=> Name: ${product.name}`);
  console.log(`=> ID: ${product.id}`);
  console.log(`=> Price: $${product.price}`);
  console.log(`=> Stock: ${product.stock}`);
}

describeProduct(scissors);
describeProduct(drill);

// Question 4 Test Code

scissors.setPrice(10);
console.log(scissors.price);

drill.describeProduct();
