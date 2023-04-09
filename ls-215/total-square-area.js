let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// Multiply together each array to form a value (map)
// add together those area values to form the total area (reduce)

function totalArea(array) {
  let individualAreas = array.map(([length, width]) => length * width);

  return individualAreas.reduce((sum, currentArea) => sum + currentArea, 0);
}

console.log(totalArea(rectangles));

function totalSquareArea(array) {
  let squares = array.filter(rect => rect[0] === rect[1]);

  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));