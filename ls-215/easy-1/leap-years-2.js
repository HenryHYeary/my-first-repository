/*
input: an integer (year) that is greater than 0
output: a boolean value indicating whther or not the 
year is a leap year

Examples: every year that is evenly divisible by 4 is a leap
year, unless the year is also divisible by 100 then it is not.
However if that same year is divisible by 400 then it is a leap
year

What should we return if the input is not an integer? What about if the integer is less than 0? What do we return then
 What if there are multiple integers passed in as arguments?

Data Structure: Should apply a series of checks to see whether
or not the year is a leap year.

Algorithm: - Guard clause for the case where the number is 0 or less than 0
  - return false in this case
  - Additionally if the argument is not a number then return false
  - After guard clauses, check to see whether or not the year
  is divisible by 4 
    - if it's not then return false
    - if it is then check to see whether it is also divisible
    by 100
      - if it is also divisible by 100 then check to see if
      it is also divisible by 400.
        - if it is then return true, if not then return false
*/

function isLeapYear(year) {
  if (year <= 0) {
    return false
  } else if (typeof year !== 'number') {
    return false;
  } else if (Number.isNaN(year)) {
    return false;
  }

  if (year >= 1752) {
    if (year % 4 !== 0) {
      return false;
    } else {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(NaN));
console.log(isLeapYear(-3));
console.log(isLeapYear('abc'));

const log = console.log;

log(isLeapYear(2016));
log(isLeapYear(2015));
log(isLeapYear(2100));
log(isLeapYear(2400));
log(isLeapYear(240000));
log(isLeapYear(240001));
log(isLeapYear(2000));
log(isLeapYear(2000));
log(isLeapYear(1900));
log(isLeapYear(1752));
log(isLeapYear(1700));
log(isLeapYear(1));
log(isLeapYear(100));
log(isLeapYear(400));