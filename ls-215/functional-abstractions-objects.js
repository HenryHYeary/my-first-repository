let myObject = { a: 1, b: 2, c: 3 };

// Object.keys(myObject).forEach(key => {
//   console.log("key: " + key + ", value: " + String(myObject[key]));
// });

let keys = Object.keys(myObject);
let values = Object.values(myObject);

const log = console.log;
log(keys);
log(values);


function doubleObjectValues(object) {
  let objEntries = Object.entries(object);
  let objMapped = objEntries.map(([key, val]) => [key, val * 2]);

  return Object.fromEntries(objMapped);
}

log(doubleObjectValues({ a: 1, b: 2, c: 3}));

function keepEvenValues(object) {
  let objEntries = Object.entries(object);
  let objFiltered = objEntries.filter(([key, val]) => val % 2 === 0);

  return Object.fromEntries(objFiltered);
}

log(keepEvenValues({ a: 1, b: 2, c: 3}));

function getTotalFromInvoice(invoice) {
  let total = Object.values(invoice).reduce((total, value) => total + value);

  return {total: total};
}

log(getTotalFromInvoice({phone: 10000, internet: 8000, tax: 3000}));
