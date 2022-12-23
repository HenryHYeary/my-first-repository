// Exercise 1

function makeCountLogger(firstNum) {
  return function(secondNum) {
    if (firstNum > secondNum) {
      for (let count = firstNum; count >= secondNum; count--) {
        console.log(count);
      }
    } else if (firstNum < secondNum) {
      for (let count = firstNum; count <= secondNum; count++) {
        console.log(count);
      }
    }
  }
}

let countlog = makeCountLogger(5);
countlog(8);

countlog(2);

// Exercise 2

function makeList() {
  let internalList = [];

  return function(todo) {
    if (!todo && internalList.length === 0) {
      console.log('The list is empty.');
    } else if (!todo) {
      internalList.forEach(elem => console.log(elem));
    } else if (!internalList.includes(todo)) {
      internalList.push(todo);
      console.log(`${todo} added!`);
    } else {
      internalList.splice(internalList.indexOf(todo), 1);
      console.log(`${todo} removed!`);
    }
  }
}

let list = makeList();
list();

list('make breakfast');

list('read book');

list();

list('make breakfast');

list();

// Exercise 2 pt 2

function makeList2() {
  return {
    internalList: [],

    add(todo) {
      if (!this.internalList.includes(todo)) {
        this.internalList.push(todo);
        console.log(`${todo} added!`);
      }
    },

    remove(todo) {
      if (this.internalList.includes(todo)) {
        this.internalList.splice(this.internalList.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      }
    },

    list() {
      if (this.internalList.length === 0) {
        console.log('The list is empty.');
      } else {
        this.internalList.forEach(elem => console.log(elem));
      }
    },
  };
}

let list2 = makeList2();

list2.add('peas');
list2.add('corn');
list2.list();
list2.remove('peas');
list2.list();

// Exercise 2 pt 3

function makeList3() {
  let items = [];
  return {
    add(item) {
      if (!items.includes(item)) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },
  
    remove(item) {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        console.log(`${item} removed!`);
      }
    },
  
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(elem => console.log(elem));
      }
    },
  }
}

let list3 = makeList3();

list3.add('peas');
list3.add('corn');
list3.list();
list3.remove('peas');
list3.list();