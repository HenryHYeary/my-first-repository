/*
input: the buffer size of the circular queue.
output: a queue object that stores all of the values passed in, deletes
the entries once the maximum size is exceeded.
Also give it an enqueue and dequeue method to add and delete numbers in the queue

Examples: Whenever the queue is dequeued the oldest object in the queue
should be removed and returned. Null should be returned if the queue is empty

Data Structure: should store an array within the queue object to hold on to values until they need
to be deleted.

define CircularQueue class
  give it an array property
  give it an enqueue method
    push the argument passed to the enqueue method to the array
      if the array is already three elements long, shift the array
      and then push the argument
  
  give it a dequeue method
    if the array is empty then return null;
    else shift out the first element in the array and return that element
*/

class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.bufferArray = [];
  }

  enqueue(number) {
    if (this.bufferArray.length < this.bufferSize) {
      this.bufferArray.push(number);
    } else {
      this.bufferArray.shift();
      this.bufferArray.push(number);
    }
  }

  dequeue() {
    if (this.bufferArray.length > 0) {
      return this.bufferArray.shift();
    } else {
      return null;
    }
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);