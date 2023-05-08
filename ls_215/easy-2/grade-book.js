/*
input: an integer
output: a string that indicates the century the year takes place in

Examples: return value should be a string that begins with century number
and ends with appropriate ending for that number.
New centuries always end with 01
Centuries are divided by 100 anywhere between 1 and end of next
Examples given only have positive integers above 0 (always one argument)
(always an integer) 
Suffix can be added with logic afterwards

Data Structure: How to visualize this?
Math.ceil from division by 100 seems best
Determine the number based on the ceil of the float value

Algorithm: find the century number (based on data structure above).
          - if the number ends in 0 then suffix should be th
          - if the number ends in 1 then suffix is st
          - ends in 2 suffix nd
          - ends in 3 suffix rd
          - ends in 4 suffix th
          - Should be based on remainder by dividing from 10

*/

function century(year) {
  let century = Math.ceil(year / 100);
  let suffix = findSuffix(century);
  
  return String(century) + suffix;
}

function findSuffix(century) {
  let stringCent = String(century);

  if (stringCent.endsWith('11') || stringCent.endsWith('12') || stringCent.endsWith('13')) {
    return 'th';
  } else if (century % 10 === 1) {
    return 'st';
  } else if (century % 10 === 2) {
    return 'nd';
  } else if (century % 10 === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}



const log = console.log;

log(century(2000));
log(century(2001));
log(century(1965));
log(century(256));
log(century(5));
log(century(10103));
log(century(1052));
log(century(1127));
log(century(11201));

