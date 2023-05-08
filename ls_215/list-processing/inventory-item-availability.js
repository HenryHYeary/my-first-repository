/*
input: an id number and a transaction object
output: a boolean value indicating whether or not the item is available

Examples: the in and out properties of each transaction specify whether to
add or subtract the quantity from the total

Data Structure: Should keep a running total of the quantity of items
coming in and out for each id number. Therefore create a variable
that is added to or subtracted from in order to get total number of items.

Algorithm: If the running total is a positive integer at the end of iteration
return true, if it is zero or negative then return false.
*/ 

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(id, transactions) {
  let runningTotal = 0;

  transactionsFor(id, transactions).forEach(transaction => {
    if (transaction.movement === 'in') {
      runningTotal += transaction.quantity;
    } else {
      runningTotal -= transaction.quantity;
    }
  });

  return runningTotal > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter(obj => obj.id === id);
}

const log = console.log;

log(isItemAvailable(101, transactions));
log(isItemAvailable(105, transactions));

// Book solution
// function isItemAvailable(item, transactions) {
//   const quantity = transactionsFor(item, transactions).reduce((sum, transaction) => {
//     if (transaction.movement === 'in') {
//       return sum + transaction.quantity;
//     } else {
//       return sum - transaction.quantity;
//     }
//   }, 0);

//   return quantity > 0;
// }