/*
input: three integers representing the length of a given triangle.
output: a string stating whether the triangle is equilateral, isosceles, scalene, or invalid.

Examples: The solution states that all valid triangles have lengths greater than zero
and the two shortest sides must be greater than the longest side.

Data Structure: should make an array or object that sorts all of the numbers passed into it by length.
After it is sorted make sure that the first two elements of the array added together are longer than the longest side.

Algorithm: should push all of the input values into the array and then run a sort method on the array to sort it numerically.
Should then use an if statement to return the correct string for the sidelength inputs.
*/

function triangle(side1, side2, side3) {
    let sidesArr = [side1, side2, side3];
    let sameValCounter = {};

    sidesArr.sort((a, b) => a - b);

    if (sidesArr.includes(0) || sidesArr[0] + sidesArr[1] < sidesArr[2]) {
        return 'invalid';
    }

    sidesArr.forEach(side => {
        if (sameValCounter[side]) {
            sameValCounter[side]++
        } else {
            sameValCounter[side] = 1;
        }
    });

    if (Object.keys(sameValCounter).length === 1) {
        return 'equilateral';
    } else if (Object.keys(sameValCounter).length === 2) {
        return 'isosceles';
    } else {
        return 'scalene';
    }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));

//Alternate solution

function triangle2(side1, side2, side3) {
    let sidesArr = [side1, side2, side3];
    let perimeter = sidesArr.reduce((sum, next) => sum + next);
  
    let longest = Math.max(...sidesArr);
    let shortest = Math.min(...sidesArr);
    let middle = perimeter - longest - shortest;
  
    if ((sidesArr.some(side => side === 0) || shortest + middle < longest)) {
      return 'invalid';
    } else if (sidesArr.every(side => side === longest)) {
      return 'equilateral';
    } else if (shortest === middle || longest === middle) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }