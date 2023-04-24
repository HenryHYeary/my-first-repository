/*
input: a floating point number
output: a string representing the degree, minute, and second values
of the floating point number as an angle

Examples: Degree symbol used to represent degrees
          - single quote to represent minutes
          - double quote to represent seconds
          - Need to have leading zeroes for single digit
          minute/second values
What if the degree number is greater than 360? What if there is more than one
input? What if the input is negative? What if the type of the input is not a number.

Data Structure: create local constants to the function that represent
                minutes per degree, and seconds per minute.
                - use these constants to divide out the correct values
                later on in the function.
                - create a sub function to append leading zeroes when necessary
                - use string interpolation to present all of the values correctly
                when the function returns a string.
Algorithm: Floor the float value passed to the function and use that as the value
          for the number of degrees
          - subtract the number of whole degrees from the float value to get the minute
          value. Multiply out that minute value by the minutes per degree constant.
          - Floor the resulting value for the number of minutes that will be in the string.
          - multiply out the remaining value for the number of seconds after that.
          - Add leading zeroes when necessary based on sub function
  Subfunction:
          - if the number is between 0 and 9 then return the number as a string plus a
          zero beforehand.

*/

const log = console.log;
log(dms(30));           // 30°00'00"
log(dms(76.73));        // 76°43'48"
log(dms(254.6));        // 254°35'59"
log(dms(93.034773));    // 93°02'05"
log(dms(0));            // 0°00'00"
log(dms(360));          // 360°00'00" or 0°00'00"
log(dms(720));

function dms(float) {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;

  float = float % 360
  let degrees = Math.floor(float);
  let minutesNoFloor = (float - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minutesNoFloor);
  let seconds = Math.floor((minutesNoFloor - minutes) * SECONDS_PER_MINUTE);

  return `${String(degrees)}°${leadingZeroCheck(minutes)}'${leadingZeroCheck(seconds)}"`;
}

function leadingZeroCheck(num) {
  if (num >= 0 && num <= 9) {
    return '0' + String(num);
  } else {
    return String(num);
  }
}