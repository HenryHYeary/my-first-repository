function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Invalid price!')
       } else {
         this.price = newPrice;
       }
    },

    describeProduct() {
      function prompt(message) {
        console.log(`=> ${message}`);
      }
    
      function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1);
      }

      prompt(`Name: ${capitalize(this.name)}`);
      prompt(`ID: ${this.id}`);
      prompt(`Price: $${this.price}`);
      prompt(`Stock: ${this.stock}`);
    },

  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let hammer = createProduct(2, 'Hammer', 6, 20);
let jackhammer = createProduct(3, 'Jackhammer', 5, 100);

scissors.describeProduct();
drill.setPrice(50);
drill.describeProduct();