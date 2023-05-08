/*
input: an array of objects
output: an array of sanitized objects (altered information and formatting fixes)

Examples: Three major changes need to occur with the band information.
All words need to be capitalized in the name fields for each band.
The country needs to be switched to Canada for every band.
All periods need to be removed from band titles.

Data Structure: This is a transformation problem, while we can't use
map on objects directly. We can retreive the entries as sub arrays and
then map those subarrays to the desired format. We can then use
fromEntries to restore the subArrays back to their original object format.

Algorithm: Map each object to an array of entries. Map the nested arrays to
the desired format. First map the first sup array to have the first letters
of each word in the string capitalized. Next map each country to be canada, next
filter out all dots from the strings contained in the band name.

Be prepared to expand upon individual requirement filters:
capitalization:
country:
no-dots:

Using sub arrays only turned out to be more complicated then I bargained for.
At least so far it seems like it's usually not worth it to convert an object into entry
subarrays for one off use cases.
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  let formattedObj = data.map(obj => {
    return {
      name: capitalizeAndSanitizeName(obj['name']),
      country: "Canada",
      active: obj['active']
    }
  });

  return formattedObj;
}

function capitalizeAndSanitizeName(name) {
  let noPeriods = name.split('').filter(char => char !== '.').join('');
  let wordsArr = noPeriods.split(' ');

  return wordsArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(processBands(bands));