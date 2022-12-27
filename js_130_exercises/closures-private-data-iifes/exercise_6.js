/*

*/

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    
    this.SKU = (this.name.replace(' ', '').slice(0, 3) + this.category.slice(0, 2)).toUpperCase();
    items.push(this);
  },

  _findBySKU(SKU) {
    return items.find(item => item.SKU === SKU);
  },

  update(SKU, obj) {
    let correctItem = this._findBySKU(SKU);
    Object.assign(correctItem, obj);
  },

  delete(SKU) {
    let correctItem = this._findBySKU(SKU);
    items.splice(items.indexOf(correctItem), 1);
  },

  inStock() {
    items.forEach(item => {
      if (item.quantity > 0) {
        console.log(item.name);
      }
    });
  },

  itemsInCategory(category) {
    let correctItems = items.filter(item => item.category === category);
    correctItems.forEach(item => console.log(item.name));
  },
}

ItemManager.create('soccer ball', 'sports', 5);
console.log(ItemManager.items);