/*
input: an array of values
output: a count of the total number of occurences in that array

Data Structure: Should create an object that can enumerate the total
number of instances of a specific element in the array.

Algorithm: iterate over every element in the array
          - for each element, if the object does not have a property
          name that corresponds with the name of the element
              - create a new property on the object for that element
          - if it does have that property
            - increment that property value by 1
          
          for each key in the object, log out the key along with an
          arrow sign followed by the total count of the number of
          appearances of that string
*/

const animals = ['boar', 'badger', 'fox', 'cat', 'boar', 'boar', 'cat'];
countOccurences(animals);
/* console output
boar => 3
badger => 1
fox => 1
cat => 2
*/

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurences(vehicles);
/* console output
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

function countOccurences(array) {
  let countObj = {};

  array.forEach(element => {
    if (!countObj.hasOwnProperty(String(element))) {
      countObj[String(element)] = 1;
    } else {
      countObj[String(element)] += 1;
    }
  });

  for (let key in countObj) {
    console.log(`${key} => ${countObj[key]}`);
  }
}