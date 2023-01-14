// class Element {
//   constructor(entry, next = null) {
//     this.entry = entry;
//     this.nextElement = next;
//   }

//   datum() {
//     return this.entry || null;
//   }

//   isTail() {
//     return !!this.next;
//   }

//   next() {
//     return this.nextElement;
//   }
// }

// class SimpleLinkedList {
//   static fromArray(array) {
//     let newList = new SimpleLinkedList();
//     if (!array) array = [];

//     for (let index = array.length - 1; index >= 0; index--) {
//       newList.push(array[index]);
//     }

//     return newList;
//   }

//   constructor() {
//     this.currentHead = null;
//     this.length = 0;
//   }

//   head() {
//     return this.currentHead;
//   }

//   size() {
//     return this.length;
//   }

//   isEmpty() {
//     return this.length === 0;
//   }

//   push(data) {
//     this.currentHead = new Element(data, this.head());
//     this.length += 1;
//   }

//   pop() {
//     let poppedVal = this.peek();
//     this.currentHead = this.head().next();
//     this.length -= 1;
//     return poppedVal;
//   }

//   peek() {
//     if (this.isEmpty()) return null;
//     return this.currentHead.datum();
//   }

//   toArray() {
//     let resultArr = [];

//     let currentEl = this.head();
//     while (currentEl !== null) {
//       resultArr.push(currentEl.datum());
//       currentEl = currentEl.next();
//     }

//     return resultArr;
//   }

//   reverse() {
//     let reversedArray = this.toArray().reverse(); 

//     return SimpleLinkedList.fromArray(reversedArray);
//   }
// }

// module.exports = { SimpleLinkedList, Element};

/*
input: an number argument for each element to be added to the linked list
output: a linked list containing all of the elements that have been pushed to
it.

Examples: each element object needs to have a datum method
a isTail method, and a next method.

each linked list object needs a size method, a isEmpty method, a peek method
a head method, a push method, a pop method, and a toArray method

Linked list constructor also needs static fromArray method

Data Structure: each element needs a property to store their data, and
needs a next property to point to the next element in the list (should be
set to null initially).
The linked list needs to store the head as one of its properties and
peeking the linked list should return the datum value of the current head.

Algorithm: create the element class and give it a data property.
give the element object a next property too, and create an isTail
method. If the next property is equal to null then return true for
isTail.
The next method on the element should return the next object in the linked list

The toArray method should push every element in the next property while next is
not equal to null to the array and then the array should be reversed and then returned.

the size method should return the length of the array produced by calling toArray on the element
object

the isEmpty property should check to see if the head property is null or not.

head should retrun the object referenced by the head property.

peek should return the datum value of the head object

The static fromArray method should create a new linked list and push every
element in the array sequentially to the new linked list object.
*/

class Element {
  constructor(data, nextEl = null) {
    this.data = data;
    this.nextEl = nextEl;
  }

  isTail() {
    return this.nextEl === null;
  }

  datum() {
    return this.data;
  }

  next() {
    return this.nextEl;
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    if (!array) return new SimpleLinkedList();

    let resultList = new SimpleLinkedList();
    for (let index = array.length - 1; index >= 0; index--) {
      resultList.push(array[index]);
    }

    return resultList;
  }

  constructor() {
    this.headEl = null;
    this.listSize = 0;
  }

  push(datum) {
    let newHead = new Element(datum, this.headEl);
    this.headEl = newHead;
    this.listSize += 1;
  }

  head() {
    return this.headEl;
  }

  peek() {
    if (this.headEl) return this.headEl.datum();
    return null;
  }

  toArray() {
    let head = this.head();
    let result = [];
    while (head !== null) {
      result.push(head.datum());
      head = head.next();
    }

    return result;
  }

  size() {
    return this.listSize;
  }

  isEmpty() {
    return this.headEl === null;
  }

  pop() {
    let result = this.head().datum();
    if (this.head().next()) this.headEl = this.head().next();
    this.listSize -= 1;
    return result;
  }

  reverse() {
    let tempArr = this.toArray();
    let resultList = new SimpleLinkedList();

    for (let index = 0; index < tempArr.length; index++) {
      resultList.push(tempArr[index]);
    }

    return resultList;
  }
}

module.exports = { Element, SimpleLinkedList };