const ItemManager = (function() {
  let items = [];

  function validateItemName(name) {
    let onlyChars = name.replace(' ', '');
    return onlyChars.length >= 5;
  }

  function validateCategory(category) {
    if (category.includes(' ')) return false;
    return category.length >= 5;
  }

  function validateQuantity(quantity) {
    return quantity !== undefined;
  }

  function validateItem(name, category, quantity) {
    return (validateItemName(name) && validateCategory(category)) &&
    validateQuantity(quantity);
  }

  function findBySKU(SKU) {
    return items.find(item => item.SKU === SKU);
  }

  return {
    create(SKU, itemName, category, quantity) {
      if (validateItem(SKU, itemName, category, quantity)) {
        this.SKU = SKU;
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
        return this;
      } else {
        return false;
      }
    },

    update(SKU) {
      if (SKU === this.SKU) {
        
      }
    },
  }
})();

  // function update(SKU, obj) {
  //   let correctItem = findBySKU(SKU);
  //   Object.assign(correctItem, obj);
  // }

  // function delete(SKU) {
  //   let correctItem = findBySKU(SKU);
  //   this.items.splice(this.items.indexOf(correctItem), 1);
  // },

  // inStock() {
  //   this.items.forEach(item => {
  //     if (item.quantity > 0) {
  //       console.log(item.name);
  //     }
  //   });
  // },

  // itemsInCategory(category) {
  //   let correctItems = this.items.filter(item => item.category === category);
  //   correctItems.forEach(item => console.log(item.name));
  // }
  
//   create(name, category, quantity) {
//     if (this._validateItem(name, category, quantity)) {
//     let item = {
//       name,
//       category,
//       quantity,

//       SKU: (name.replace(' ', '').slice(0, 3) + category.slice(0, 2)).toUpperCase(),
//     };

//     this.items.push(item);
//     } else {
//       return false;
//     }
//   },

//   _validateItemName(name) {
//     let onlyChars = name.replace(' ', '');
//     return onlyChars.length >= 5;
//   },

//   _validateCategory(category) {
//     if (category.includes(' ')) return false;
//     return category.length >= 5;
//   },

//   _validateQuantity(quantity) {
//     return quantity !== undefined;
//   },

//   _validateItem(name, category, quantity) {
//     return (this._validateItemName(name) && this._validateCategory(category)) &&
//     this._validateQuantity(quantity);
//   },

//   _findBySKU(SKU) {
//     return this.items.find(item => item.SKU === SKU);
//   },

//   update(SKU, obj) {
//     let correctItem = this._findBySKU(SKU);
//     Object.assign(correctItem, obj);
//   },

//   delete(SKU) {
//     let correctItem = this._findBySKU(SKU);
//     this.items.splice(this.items.indexOf(correctItem), 1);
//   },

//   inStock() {
//     this.items.forEach(item => {
//       if (item.quantity > 0) {
//         console.log(item.name);
//       }
//     });
//   },

//   itemsInCategory(category) {
//     let correctItems = this.items.filter(item => item.category === category);
//     correctItems.forEach(item => console.log(item.name));
//   },
// }

// const ReportManager = {
//   init(itemManager) {
//     this.items = itemManager.items;
//   },

//   createReporter(SKU) {
//     return {
//       itemInfo() {
//         let item = this.items._findBySKU(SKU)
//       }
//     }
//   }
// }

// const log = console.log;

// ItemManager.create('basket ball', 'sports', 0);           // valid item
// log(ItemManager.create('asd', 'sports', 0));
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// log(ItemManager.create('football', 'sports'));
// ItemManager.create('football', 'sports', 3);              // valid item
// log(ItemManager.create('kitchen pot', 'cooking items', 0));
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items
// console.log(ItemManager.items);