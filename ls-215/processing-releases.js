let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

/*
Problem: need to only output the id and title properties of objects that have them
input: an array of objects
output: objects that only have the id and title property

Examples: some do not have the required properties. First step should be to filter the objects
Next should be to transform the objects into only having the two properties that are required.

Data structure: use newly returned array from the objects that do have the correct properties
and map that array to be only the objects which will only contain the required properties.
*/

function processReleaseData(data) {
  let containsIdAndTitle = data.filter(obj => obj.hasOwnProperty('id') && obj.hasOwnProperty('title'));
  let onlyIdAndTitle = containsIdAndTitle.map(obj => {
    return {id: obj['id'], title: obj['title']};
  });
  
  return onlyIdAndTitle;
}

console.log(processReleaseData(newReleases));