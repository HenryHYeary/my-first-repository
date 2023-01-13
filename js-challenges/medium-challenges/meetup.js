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

// class Meetup {
//   constructor(year, month) {
//     this.year = year;
//     this.month = month - 1;
//   }

//   toString() {
//     return this.day().toString();
//   }

//   day(weekday, schedule) {
//     let eligibleDates = [];
//     let THIRTY_MONTHS = [3, 5, 8, 10];
//     let THIRTY_ONE_MONTHS = [0, 2, 4, 6, 7, 9, 11];

//     let DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
//     let VALID_SCHEDULE_TOKENS = ['first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'];

//     let weekdayNum = DAYS_OF_WEEK.indexOf(DAYS_OF_WEEK.find(correctDay => weekday.toLowerCase() === correctDay));

//     if (THIRTY_ONE_MONTHS.includes(this.month)) {
//       for (let day = 1; day <= 31; day++) {
//         let currentDate = new Date(this.year, this.month, day);
//         if (currentDate.getDay() === weekdayNum) {
//           eligibleDates.push(currentDate);
//         }
//       }
//     } else if (THIRTY_MONTHS.includes(this.month)) {
//       for (let day = 1; day <= 30; day++) {
//         let currentDate = new Date(this.year, this.month, day);
//         if (currentDate.getDay() === weekdayNum) {
//           eligibleDates.push(currentDate);
//         }
//       }
//     } else {
//       let numOfFebDays = new Date(this.year, 2, 0).getDate();
//       for (let day = 1; day <= numOfFebDays; day++) {
//         let currentDate = new Date(this.year, this.month, day);
//         if (currentDate.getDay() === weekdayNum) {
//           eligibleDates.push(currentDate);
//         }
//       }
//     }


//     function findDateBySchedule() {
//       let placeTokens = VALID_SCHEDULE_TOKENS.slice(0, 5);
//       schedule = schedule.toLowerCase();

//       if (placeTokens.includes(schedule)) {
//         if (eligibleDates[placeTokens.indexOf(schedule)]) {
//           return eligibleDates[placeTokens.indexOf(schedule)];
//         } else {
//           return null;
//         }
//       } else if (schedule === 'last') {
//         return eligibleDates[eligibleDates.length - 1];
//       } else if (schedule === 'teenth') {
//         let TEENS = [13, 14, 15, 16, 17, 18, 19];
//         let correctDate = eligibleDates.find(date => TEENS.includes(date.getDate()));
//         return correctDate;
//       }
//     };

//     return findDateBySchedule();
//   }
// }

// module.exports = Meetup;

/*
input: a year, a month, and a day. For the day method you would need
to pass in two strings, one for the day of the week and the second for
the schedule
output: a string representation of the date specified by the day method
(from toString method), so output should first be a date and then a string
with a chained method

Examples: dates are 0 indexed in JS so should process the date range with a month
number lower by 1 than the traditional month number.
The object returned by day needs to be chainable with a toString method.
Teenth is another valid specification after fifth
The fifth appearance of a weekday can be null as well if it does not occur
within the given time frame.

Data Structure: should create a local array for the day function that contains
every weekday specified by its day of the week identifier (also zero indexed)

Algorithm: iterate through the number of days in the month that can be determined from
putting in 0 as the date of the month immediately after the month in question.
Add every day that matches the day of the week indicator for the day of the week you are
looking for
Figure out based on the schedule flag which of the specific dates are the correct date.
*/

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  _findAllPossibleDates(dayOfWeek) {
    dayOfWeek = dayOfWeek.toLowerCase();
    let daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let possibleDates = [];
    let targetDay = daysOfWeek.indexOf(dayOfWeek);

    let daysToIterate = new Date(this.year, this.month + 1, 0).getDate();

    for (let day = 1; day <= daysToIterate; day++) {
      let currentDate = new Date(this.year, this.month, day);
      if (currentDate.getDay() === targetDay) {
        possibleDates.push(currentDate);
      }
    }

    return possibleDates;
  }

  day(dayOfWeek, schedule) {
    schedule = schedule.toLowerCase();
    let allPossibleDates = this._findAllPossibleDates(dayOfWeek);
    let countTokens = ['first', 'second', 'third', 'fourth', 'fifth'];

    if (countTokens.includes(schedule)) {
      let correctDate = allPossibleDates[countTokens.indexOf(schedule)];
      if (correctDate) {
        return correctDate;
      } else return null;
    } else if (schedule === 'last') {
      let correctDate = allPossibleDates[allPossibleDates.length - 1];
      return correctDate;
    } else if (schedule === 'teenth') {
      let teenthDays = [13, 14, 15, 16, 17, 18, 19];
      let correctDate = allPossibleDates.find(date => teenthDays.includes(date.getDate()));
      return correctDate;
    }
  }
}

module.exports = Meetup;