/*
input: an id number and an array of objects specifying the ID, movement and quantity of a specific item of inventory.
output: the objects that match the id number passed in before the array of object.

Examples: The most important value to pay attention to is the item ID number.

Data Structure: should create a blank array variable to pass each object that matches the given ID number.

Algorithm: use a forEach loop with the blank object or simply use the fitler method to either add or filter out the 
proper objects to return in the final array.
*/

function transactionsFor(transactionNum, transactionArr) {
  return transactionArr.filter(obj => {
    return obj['id'] === transactionNum;
  });
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




console.log(transactionsFor(101, transactions));