/*
input: an extremely long line of text that is full of email data (string)
output: The number of email messages found in the string (string)
A date range of when the email messages were sent (string)

Examples: Looks like the main tag to care about is the message delimiter "##||##"
Also need to care about the delimiter string "#/#" as it separates the parts of every
email message and we care specifically about when that precedes "Date" in the string.

Data Structure: Should try to separate out the string into an array of email messages
Within those messages try to find the information pertinent to the date it was sent and then
add that to another array.

Algorithm: count the length of the total messages array and return that as the count of
emails. Also keep track of the minimum and maximum dates that are found within those arrays.
Iterate through the array of dates and update the starting and ending dates as soon as you find a new
date min or max.
*/

function mailCount(emailData) {
  let emails = separateEmails(emailData);
  let dates = separateDates(emailData);
  let earliest = dates.reduce((min, next) => min < next ? min : next);
  let latest = dates.reduce((max, next) => max > next ? max : next);

  return formatReturnString(emails, earliest, latest);
}

function separateEmails(text) {
  return text.split('##||##');
}

function separateDates(text) {
  let dateStrings = text.match(/[0-9]{2}\-[0-9]{2}\-[0-9]{4}/g);

  return dateStrings.map(string => new Date(string));
}

function formatReturnString(emails, earliest, latest) {
  return `Count of Email: ${emails.length}\nDate Range: ${earliest.toDateString()} - ${latest.toDateString()}`;
}

console.log(mailCount(emailData));