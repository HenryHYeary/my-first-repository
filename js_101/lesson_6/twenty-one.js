/*
1. Initialize Deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
- repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
-repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

const readline = require('readline-sync');
const SUITS = ['S', 'H', 'D', 'C'];
const FACE_CARDS = ['Jack', 'King', 'Queen'];


function initalizeDeck() {
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    SUITS.forEach(suit => {
      deck.push([suit, `${i}`]);
    });
  }

  FACE_CARDS.forEach(face => {
    SUITS.forEach(suit => {
      deck.push([suit, face]);
    })
  });

  SUITS.forEach(suit => {
    deck.push([suit, 'A']);
  });

  return deck;
}

function dealRandomCard(deck) {
  let randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (FACE_CARDS.includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  let aces = values.filter(value => value === 'A');
  aces.forEach(ace => {
    if (sum >= 21) ace -= 10;
  });

  return sum;
}

function busted(total) {
  return total > 21;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let otherIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[otherIndex]] = [array[otherIndex], array[i]];
  }
}

function joinOr(arr, delimiter = ', ', conjunction = 'or') {
  switch(arr.length) {
    case 0:
      return '';
    case 1:
      return arr.join();
    case 2:
      return `${String(arr[0])} ${conjunction} ${String(arr[1])}`;
    default: 
      let joinedString = arr.join(delimiter);
      let finalElement = String(arr[arr.length - 1]);
      return `${joinedString.substring(0, joinedString.length - 2)} ${conjunction} ${finalElement}`
  }
}

function determineWinner(playerTotal, dealerTotal) {
  if (playerTotal > dealerTotal) {
    console.log(`Congratulations! You won!`);
  } else if (playerTotal < dealerTotal) {
    console.log('The dealer wins!');
  } else if (busted(playerTotal)){
    console.log('You busted! The dealer wins.');
  } else if (busted(dealerTotal)) {
    console.log('The dealer busted! You win!');
  } else {
    console.log('You tied!');
  }
}

while (true) {
  let deck = initalizeDeck();
  shuffle(deck);
  let playerHand = [];
  let dealerHand = [];

  playerHand.push(dealRandomCard(deck));
  dealerHand.push(dealRandomCard(deck));
  playerHand.push(dealRandomCard(deck));
  dealerHand.push(dealRandomCard(deck));

  function displayCardValues() {
    let valuesOnly = []
    playerHand.forEach(subArr => {
      valuesOnly.push(subArr[1]);
    })
    console.log(`Dealer has: ${dealerHand[0][1]} and unknown card.`);
    console.log(`You have: ${joinOr(valuesOnly, ', ', 'and')}`);
  }

  displayCardValues();

  console.log('Hit or stay?');
  let answer = readline.question();
  if (answer === 'hit') {
    displayCardValues();
    dealRandomCard(deck, playerHand);
    console.log('Hit or stay?');
    answer = readline.question();
  }

  if (total(dealerHand) <= 17) {
    dealRandomCard(deck, dealerHand);
  }


  if (answer === 'stay') {
    determineWinner(total(playerHand), total(dealerHand));
  }

  break;
}

