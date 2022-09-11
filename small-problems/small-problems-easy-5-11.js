/*
input: A positive or negative integer.
output: a string showing what time of day it is with the input number representing minutes before or after midnight.

Examples: If 0 is passed in to the function, it should return 00:00, should also be able to return the correct value for any integer regardless of how large or small.
May not use the Date class method.

Data Structure: should use an empty string to push the correct values to.
Should use constant variables for minutes in an hour and hours in a day
Should use count variables to keep track of the total number of minutes and hours(?)

Algorithm: Algorithm: Implement a counter that goes up for every hour that is divisible into the number of total minutes.
reset a local counter for minutes to zero every time a new multiple of 60 is found.
Use previously implemented algorithm for 5-1 to keep track of 24 hour cycles and negative inputs.
*/

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(mins) {
  let minsPerThisHour = 0;
  let totalHours = 0;
  let timesThrough = 0;
  for (let i = 0; i < Math.abs(mins); i++) {
    if (i % MINUTES_PER_DAY === 0) {
      timesThrough++;
    }
  }

  if(mins < 0 ) {
    mins = mins + (MINUTES_PER_DAY * timesThrough);
  } else if (mins > MINUTES_PER_DAY) {
    mins = mins - (MINUTES_PER_DAY * (timesThrough - 1));
  }

  for (let i = 0; i < mins; i++) {
    minsPerThisHour++;
    if (minsPerThisHour > 0 && minsPerThisHour % MINUTES_PER_HOUR === 0) {
      totalHours++;
      minsPerThisHour = 0;
    }
  }

  return `${padZeroes(totalHours)}:${padZeroes(minsPerThisHour)}`;
}

function padZeroes(num) {
  switch(String(num).length) {
    case 1: return `0${num}`;
    default: return String(num);
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");