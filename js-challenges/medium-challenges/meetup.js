/*
input: month and year for constructor, weekday, and schedule for method.
output: the date that matches the specified schedule within the month given.

Examples: need to include first second, third, fourth, fifth, and teenth
options to enter in as a schedule for the output date. Should be combined
in a day method, and date should be expressible as a string with a toString method.

Data Structure: should use date objects to create correct representation of the dates
the test suite requests. Fifth day of the month might not happen every month so be prepared
to deal with that situation (should be null according to test suite).

Remember that April, June, Sept, Nov all have 30
Feb has 28 most years but 29 in leap years
every other month has 31 days.

last day of the week of the month is between the 22nd and 31st of the month depending
on the number of days in the given month.
*/

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  toString() {
    return this.day().toString();
  }

  day(weekday, schedule) {
    let eligibleDates = [];
    let THIRTY_MONTHS = [3, 5, 8, 10];
    let THIRTY_ONE_MONTHS = [0, 2, 4, 6, 7, 9, 11];

    let DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let VALID_SCHEDULE_TOKENS = ['first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'];

    let weekdayNum = DAYS_OF_WEEK.indexOf(DAYS_OF_WEEK.find(correctDay => weekday.toLowerCase() === correctDay));

    if (THIRTY_ONE_MONTHS.includes(this.month)) {
      for (let day = 1; day <= 31; day++) {
        let currentDate = new Date(this.year, this.month, day);
        if (currentDate.getDay() === weekdayNum) {
          eligibleDates.push(currentDate);
        }
      }
    } else if (THIRTY_MONTHS.includes(this.month)) {
      for (let day = 1; day <= 30; day++) {
        let currentDate = new Date(this.year, this.month, day);
        if (currentDate.getDay() === weekdayNum) {
          eligibleDates.push(currentDate);
        }
      }
    } else {
      let numOfFebDays = new Date(this.year, 2, 0).getDate();
      for (let day = 1; day <= numOfFebDays; day++) {
        let currentDate = new Date(this.year, this.month, day);
        if (currentDate.getDay() === weekdayNum) {
          eligibleDates.push(currentDate);
        }
      }
    }


    function findDateBySchedule() {
      let placeTokens = VALID_SCHEDULE_TOKENS.slice(0, 5);
      schedule = schedule.toLowerCase();

      if (placeTokens.includes(schedule)) {
        if (eligibleDates[placeTokens.indexOf(schedule)]) {
          return eligibleDates[placeTokens.indexOf(schedule)];
        } else {
          return null;
        }
      } else if (schedule === 'last') {
        return eligibleDates[eligibleDates.length - 1];
      } else if (schedule === 'teenth') {
        let TEENS = [13, 14, 15, 16, 17, 18, 19];
        let correctDate = eligibleDates.find(date => TEENS.includes(date.getDate()));
        return correctDate;
      }
    };

    return findDateBySchedule();
  }
}

module.exports = Meetup;