
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;
const MAX_DEGREES = 360;

function dms(degreesFloat) {
  let timesThrough = 1;
  
  if (Math.abs(degreesFloat) > MAX_DEGREES) {
    timesThrough++; // logic needs work here, how to deal with multiples of 360;
  }
  
  if(degreesFloat < 0 ){
    degreesFloat = degreesFloat + (MAX_DEGREES * timesThrough);
  } else if (degreesFloat > MAX_DEGREES) {
    degreesFloat = degreesFloat - (MAX_DEGREES * (timesThrough - 1));
  }

  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" + padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

function log(arr) {
  arr.forEach(element => console.log(element));
}

let testCases = [
dms(-1),   // 359°00'00"
dms(400),  // 40°00'00"
dms(-40),  // 320°00'00"
dms(-420), // 300°00'00"
]

log(testCases);