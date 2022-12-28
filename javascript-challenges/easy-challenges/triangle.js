/*
Problem:
Input: the side lengths of a triangle
Output: a classification of the triangle or an error if 
triangle is invalid

Examples: Should be formatted as an instance of a constructor
function. Should have kind method, should throw error if side lengths
are incorrect.

Data Structure: should accept the three sides as arguments and create properties
on the object. Create the kind method on the prototype of the constructor function.

Algorithm:
if any sides are zero or below, throw error

if the sum of any two sides are not greater than the other side throw error

if all sides are equal, triangle is equilateral

if longest and middle are equal, or shortest and middle are equal then triangle is isosceles

Otherwise triangle is scalene.
*/

class Triangle {
  constructor(side1, side2, side3) {
    if (this._validateTriangle(side1, side2, side3)) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    } else {
      throw new Error('Invalid triangle.');
    }
  }

  _validateTriangle(...args) {
    if (args.some(side => !(side > 0))) return false;
    
    return (args[0] + args[1] > args[2] && args[0] + args[2] > args[1])
    && args[1] + args[2] > args[0];
  }

  kind() {
    let sides = [this.side1, this.side2, this.side3];
    let perimeter = sides.reduce((sum, next) => sum + next, 0);
    let longest = Math.max(...sides);
    let shortest = Math.min(...sides);
    let middle = perimeter - longest - shortest;

    if (sides.every(side => side === shortest)) {
      return 'equilateral';
    } else if (longest === middle || shortest === middle) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

let triangle = new Triangle(3, 4, 5);

module.exports = Triangle;