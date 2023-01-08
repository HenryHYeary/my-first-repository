/*
input: information in the form of an array
output: a "set" data structure with several methods that can be
performed on the information/data.

Examples: required methods are isEmpty, contains, isSubset, isDisjoint,
isSame, add, intersection, difference, union,

Data Structure: should use plain objects to represent sets, in particular
use the plain object in the manner of a dictionary. Maybe create sets as 
a regular object with only a key and a value of undefined.

Algorithm: get the keys from the original object, if the length of the
resulting keys array is zero then return true for isEmpty
*/

class CustomSet {
  constructor(array) {
    let set = {};

    if (array) {
      array.forEach(elem => {
        set[elem] = undefined;
      });
  
      this.ownSet = set;
    } else {
      this.ownSet = {};
    }
  }

  isEmpty() {
    return Object.keys(this.ownSet).length === 0;
  }

  contains(elem) {
    for (let key in this.ownSet) {
      if (Number(key) === elem) return true;
    }

    return false;
  }

  isSubset(comparisonSet) {
    for (let key in this.ownSet) {
      if (!comparisonSet.ownSet.hasOwnProperty(key)) return false;
    }

    return true;
  }

  isDisjoint(comparisonSet) {
    for (let key in this.ownSet) {
      if (comparisonSet.ownSet.hasOwnProperty(key)) return false;
    }

    return true;
  }

  isSame(comparisonSet) {
    if (Object.keys(this.ownSet).length !== Object.keys(comparisonSet.ownSet).length) return false;

    for (let key in this.ownSet) {
      if (!comparisonSet.ownSet.hasOwnProperty(key)) return false;
    }

    return true;
  }

  add(elem) {
    this.ownSet[elem] = undefined;
    return this;
  }
  
  intersection(comparisonSet) {
    let intermediateArr = [];

    for (let key in this.ownSet) {
      if (comparisonSet.ownSet.hasOwnProperty(key)) {
        intermediateArr.push(Number(key));
      }
    }

    return new CustomSet(intermediateArr);
  }

  difference(comparisonSet) {
    let intermediateArr = [];

    for (let key in this.ownSet) {
      if (!comparisonSet.ownSet.hasOwnProperty(key)) {
        intermediateArr.push(Number(key));
      }
    }

    return new CustomSet(intermediateArr);
  }

  union(otherSet) {
    let intermediateArr = [];

    for (let key in this.ownSet) {
      intermediateArr.push(Number(key));
    }

    for (let key in otherSet.ownSet) {
      intermediateArr.push(Number(key));
    }

    return new CustomSet(intermediateArr);
  }
}

module.exports = CustomSet;