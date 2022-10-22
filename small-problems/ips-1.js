/*
input: a number representing the total number of lights/switches
output: an array containing the switches that are on at the end of a sequence of turning off and on the switches, marked by their number (or when they appear in order);

Examples: The sequence of turning on and off is complete when the number of passes matches the number of switches.
The switches should be toggled if they are a subsequent multiple of the iteration (i.e. third pass is multiples of three, fourth is mults of four)

Data Structure: should create an object and create a property for each number, should then register the value for each property as true.

Algorithm: should iterate through the objects and switch the true or false value based on the nth multiple rule stated above.
After the last iteration filter the keys of the object into a new array to where the key will be included if the value of the property is true.
Return the resulting array from this process.
*/

function lightsOn(switches) {
  let onOrOffObj = {};

  for (let currentSwitch = 1; currentSwitch <= switches; currentSwitch++) {
    onOrOffObj[currentSwitch] = true;
  }

  onOrOffObj = switchLights(onOrOffObj);

  let filteredKeys = Object.keys(onOrOffObj).filter(key => {
    return onOrOffObj[key] === true;
  });

  return filteredKeys.map(key => Number(key));
}


function switchLights(obj) {
  let numOfIterations = Object.keys(obj).length

  for (let currentIteration = 2; currentIteration <= numOfIterations; currentIteration++) {
    for (let key in obj) {
      if (key % currentIteration === 0) {
        obj[key] = !obj[key];
      }
    }
  }

  return obj;
}

console.log(lightsOn(5));
console.log(lightsOn(100));