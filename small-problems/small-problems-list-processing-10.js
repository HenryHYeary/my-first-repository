/*
input: an id number and an array containing objects describing the movement id number and quantity of objects.
output: a boolean value of whether or not the sum of the quantity values of the item's transactions is greater than zero.

Examples: the movement value should be taken into account along with the ID and quantity values,
as the movement value will indicate whether the quantity should be added or subtracted from the total tracking quantity of the item.

Data Structure: we should create a separate integer variable that will start off at zero and keep track of the quantity count for every individual transaction
passed into the function.

Algorithm: should first use the function created in the previous exercise to make sure we are operating
only off of an array that has the items that we care about. Next we should create the count variable,
then use a for loop or forEach loop to iterate over the objects contents and create an if conditional 
that determines whether or not the quantity should be added or subtracted from the total count.
*/

function transactionsFor(transactionNum, transactionArr) {
  return transactionArr.filter(obj => {
    return obj['id'] === transactionNum;
  });
}

function isItemAvailable(transactionNum, transactionArr) {
  let correctItemArr = transactionsFor(transactionNum, transactionArr);
  let count = 0;

  correctItemArr.forEach(obj => {
    if (obj['movement'] === 'in') {
      count += obj['quantity'];
    } else if (obj['movement'] === 'out') {
      count -= obj['quantity'];
    }
  });

  return count > 0;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));