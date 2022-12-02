let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let price = this.price;
    let discount = price * (percent / 100);
    price -= discount;
    
    return price;
  },
};

const log = console.log;

log(item.discount(20));
log(item.discount(50));
log(item.discount(25));