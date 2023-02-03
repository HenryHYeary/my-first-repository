class Element {
  constructor(entry, next = null) {
    this.entry = entry;
    this.nextElement = next;
  }

  datum() {
    return this.entry || null;
  }

  isTail() {
    return !!this.next;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  static fromArray(array) {
    let newList = new SimpleLinkedList();
    if (!array) array = [];

    for (let index = array.length - 1; index >= 0; index--) {
      newList.push(array[index]);
    }

    return newList;
  }

  constructor() {
    this.currentHead = null;
    this.length = 0;
  }

  head() {
    return this.currentHead;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(data) {
    this.currentHead = new Element(data, this.head());
    this.length += 1;
  }

  pop() {
    let poppedVal = this.peek();
    this.currentHead = this.head().next();
    this.length -= 1;
    return poppedVal;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.currentHead.datum();
  }

  toArray() {
    let resultArr = [];

    let currentEl = this.head();
    while (currentEl !== null) {
      resultArr.push(currentEl.datum());
      currentEl = currentEl.next();
    }

    return resultArr;
  }

  reverse() {
    let reversedArray = this.toArray().reverse(); 

    return SimpleLinkedList.fromArray(reversedArray);
  }
}

module.exports = { SimpleLinkedList, Element};