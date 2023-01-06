/*
input: an integer to the at method, and a number of minutes for add or
subtract
output: the current time specified by the number of minutes before or after
the hour passed in as an argument to the at method.

Examples: Subtracting minutes from a 0 argument for at should start the subtraction
from 24:00 indicating that the time is going into a previous day. The same should happen
with adding to 24:00.

Data Structure: Should create hour and minute variables, should also have methods
or internal functions ready to create leading zeroes in front of a digit if it is less than 10.
Make sure hour argument is moduloed for 24 hours from total hour count and minutes is moduloed for 60
from total minute count.

Algorithm: define clock constructor
create static method named at on clock constructor have it take an hour, at should return
a new object with the correct record of total hours and minutes / or simply quantify the time in minutes
and min argument. Set default value of min to 0 if no argument is provided
  new object returned by at should have add and subtract methods present on it to tell the time
  given adjustments of increased minutes or hours.
*/

class Clock {
  static HOURS_IN_DAY = 24;
  static MINUTES_PER_HOUR = 60;
  static MINUTES_PER_DAY = this.HOURS_IN_DAY * this.MINUTES_PER_HOUR;

  static at(hours, minutes = 0) {
    hours %= Clock.HOURS_IN_DAY;
    minutes %= Clock.MINUTES_PER_HOUR;

    return {
      hours,
      minutes,

      toString() {
        function leadingZeroes(num) {
          if (num < 10) {
            return `0${num}`;
          } else {
            return String(num);
          }
        }

        return `${leadingZeroes(hours)}:${leadingZeroes(minutes)}`;
      },

      isEqual(comparisonClock) {
        return this.toString() === comparisonClock.toString();
      },

      add(minCount) {
        let totalTimeinMins = this.minutes + (this.hours * Clock.MINUTES_PER_HOUR);
        let maxInDay = Clock.HOURS_IN_DAY * Clock.MINUTES_PER_HOUR;
        let newTotalTime = (totalTimeinMins + minCount) % Clock.MINUTES_PER_DAY;

        if (newTotalTime > maxInDay) {
          newTotalTime = newTotalTime - maxInDay;
        }

        let hours = Math.floor(newTotalTime / Clock.MINUTES_PER_HOUR);
        let minutes = newTotalTime % Clock.MINUTES_PER_HOUR;

        return Clock.at(hours, minutes);
      },

      subtract(minCount) {
        let totalTimeinMins = this.minutes + (this.hours * Clock.MINUTES_PER_HOUR);
        let maxInDay = Clock.HOURS_IN_DAY * Clock.MINUTES_PER_HOUR;
        let newTotalTime = (totalTimeinMins - minCount) % Clock.MINUTES_PER_DAY;

        if (newTotalTime < 0) {
          newTotalTime = maxInDay + newTotalTime;
        }

        let hours = Math.floor(newTotalTime / Clock.MINUTES_PER_HOUR);
        let minutes = newTotalTime % Clock.MINUTES_PER_HOUR;

        return Clock.at(hours, minutes);
      }
    }
  }
}

module.exports = Clock;