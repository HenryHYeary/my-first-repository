const ItemManager = {
  items: [],
  
  // Need to add verification for item properties
  create(name, category, quantity) {
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    
    this.SKU = (this.name.replace(' ', '').slice(0, 3) + this.category.slice(0, 2)).toUpperCase();
    this.items.push(this);
  },

  _findBySKU(SKU) {
    return this.items.find(item => item.SKU === SKU);
  },

  update(SKU, obj) {
    let correctItem = this._findBySKU(SKU);
    Object.assign(correctItem, obj);
  },

  delete(SKU) {
    let correctItem = this._findBySKU(SKU);
    this.items.splice(this.items.indexOf(correctItem), 1);
  },

  inStock() {
    this.items.forEach(item => {
      if (item.quantity > 0) {
        console.log(item.name);
      }
    });
  },

  itemsInCategory(category) {
    let correctItems = this.items.filter(item => item.category === category);
    correctItems.forEach(item => console.log(item.name));
  },
}

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(SKU) {
    return {
      itemInfo() {
        let item = this.items._findBySKU(SKU)
      }
    }
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);