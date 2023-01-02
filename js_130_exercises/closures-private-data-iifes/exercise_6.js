const ItemCreator = (function() {
  function validateItemName(name) {
    let onlyChars = name.replace(' ', '');
    return onlyChars.length >= 5;
  }

  function validateQuantity(quantity) {
    return quantity !== undefined;
  }

  function validateCategory(category) {
    if (category.includes(' ')) return false;
    return category.length >= 5;
  }

  function generateSKUCode(name, category) {
    let nameSlice = name.slice(0, 3);
    let categorySlice = category.slice(0, 2);

    return (nameSlice + categorySlice).toUpperCase();
  }

  return function(itemName, category, quantity) {
    if (validateItemName(itemName) && validateCategory(category) && validateQuantity(quantity)) {
      this.SKUCode = generateSKUCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  }

})();

const ItemManager = {
  items: [],

  getItem(SKU) {
    return this.items.find(item => item.SKUCode === SKU);
  },

  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity)
  
    if (!item.hasOwnProperty('notValid')) {
      this.items.push(item);
    } else {
      return false;
    }
  },

  update(SKU, obj) {
    let targetItem = this.getItem(SKU);
    Object.assign(targetItem, obj);
  },

  delete(SKU) {
    let targetItem = this.getItem(SKU);
    this.items.splice(this.items.indexOf(targetItem), 1);
  },

  inStock() {
    let stockedItems = this.items.filter(item => item.quantity > 0);
    stockedItems.forEach(item => console.log(item.itemName));
  },

  itemsInCategory(category) {
    let sameCatItems = this.items.filter(item => item.category === category);
    sameCatItems.forEach(item => console.log(item.itemName));
  },
};

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(SKU) {
    let targetItem = this.items.getItem(SKU);

    return {
      itemInfo() {
        let itemEntries = Object.entries(targetItem);
        itemEntries.forEach(entry => {
          console.log(`${entry[0]}: ${entry[1]}`);
        });
      }
    }
  },

  reportInStock() {
    this.items.inStock();
  },
};

const log = console.log;

ItemManager.create('basket ball', 'sports', 0);           // valid item
log(ItemManager.create('asd', 'sports', 0));
ItemManager.create('soccer ball', 'sports', 5);           // valid item
log(ItemManager.create('football', 'sports'));
ItemManager.create('football', 'sports', 3);              // valid item
log(ItemManager.create('kitchen pot', 'cooking items', 0));
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();

ReportManager.reportInStock();

ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');

console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();