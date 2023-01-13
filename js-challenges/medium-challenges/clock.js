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

/*
input: an argument of either only hours or both hours and minutes
output: a clock objecct that keeps track of the time and has addition
and subtraction methods to return a new clock object.

Examples: two clocks that represent the same time should be equal to each other
a toString method also needs to be supplied for the clock to give it standard
digital time notation.
The clocks should also be able to wrap forward or back around into different
days

Data Structure: should have variables for both hours and minutes. Can keep
a track of total minutes based on the arguments provided and then add or subtract
those minutes from the total number of minutes in a day as well. Should have constants
for minutes in an hour, hours in a day, and minutes in a day.

Algorithm: Create a constructor and use the at method as a form of a constructor
the at method should return an object that can return another clock object
that can add or subtract minute values from the original clock time and then return the
new clock object.

When determining the time multiply out the hours into total minutes and compare that time with
the total number of minutes in a day. Depending on whether the time exceeds or falls under the total
amount of time necessary, you can either subtract it from the total number of mins in a day
or add it to zero.
*/

// class Clock {
//   static HOURS_PER_DAY = 24;
//   static MINS_PER_HOUR = 60;
//   static MINS_PER_DAY = this.MINS_PER_HOUR * this.HOURS_PER_DAY;

//   static at(hours, mins = 0) {
//     return new Clock(hours, mins);
//   }

//   constructor(hours, mins = 0) {
//     this.hours = hours;
//     this.mins = mins;
//   }

//   toString() {
//     function leadingZeroes(number) {
//       if (number < 10) {
//         return `0${String(number)}`;
//       } else {
//         return String(number);
//       }
//     }

//     return `${leadingZeroes(this.hours)}:${leadingZeroes(this.mins)}`;
//   }

//   add(mins) {
//     let hoursToAdd = Math.floor((mins + this.mins) / Clock.MINS_PER_HOUR);
    
//     let newHours = (this.hours + hoursToAdd) % Clock.HOURS_PER_DAY;
//     let newMins = this.mins + (mins % Clock.MINS_PER_HOUR);

//     return new Clock(newHours, newMins);
//   }

//   isEqual(comparisonClock) {
//     return this.toString() === comparisonClock.toString();
//   }

//   subtract(mins) {
//     let totalMins = (this.hours * Clock.MINS_PER_HOUR) + this.mins;
//     let difference = totalMins - mins;
//     if (difference < 0) {
//       totalMins = Clock.MINS_PER_DAY + (difference % Clock.MINS_PER_DAY);
//     } else {
//       totalMins = difference;
//     }

//     let newHours = Math.floor(totalMins / Clock.MINS_PER_HOUR); 
//     let newMins = Math.floor(totalMins % Clock.MINS_PER_HOUR);

//     return new Clock(newHours, newMins);
//   }
// }

// module.exports = Clock;