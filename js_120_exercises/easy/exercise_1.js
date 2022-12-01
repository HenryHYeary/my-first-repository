class Rectangle {
  constructor(width, length) {
    this.length = length;
    this.width = width;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

const log = console.log;

let rect = new Rectangle(4, 5);

log(rect.getWidth());
log(rect.getLength());
log(rect.getArea());