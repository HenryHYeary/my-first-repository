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
const FACE_CARDS = ['J', 'K', 'Q'];


function initalizeDeck() {
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    SUITS.forEach(suit => {
      deck.push(suit, `${i}`);
    });
  }

  FACE_CARDS.forEach(face => {
    SUITS.forEach(suit => {
      deck.push(suit, face);
    })
  });

  SUITS.forEach(suit => {
    deck.push(suit, 'A');
  });

  return deck;
}

function dealRandomCard(deck, currentPlayer) {
  let randomIndex = Math.floor(Math.random() * deck.length);
  if (currentPlayer === 'player') {
    playerHand.push(deck[randomIndex]);
  } else {
    dealerHand.push(deck[randomIndex]);
  }
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
    if (sum >= 21) sum -= 10;
  });
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

while (true) {
  let deck = initalizeDeck();
  let playerHand = [];
  let dealerHand = [];

  dealRandomCard(deck, playerHand);
  dealRandomCard(deck, dealerHand);
  dealRandomCard(deck, playerHand);
  dealRandomCard(deck, dealerHand);

  console.log('Hit or stay?');
  let answer = readline.question();
  if (answer === 'hit') {
    dealRandomCard(deck, playerHand);
    console.log('Hit or stay?');
    answer = readline.question();
  }

  if (total(dealerHand) <= 17) {
    dealRandomCard(deck, dealerHand);
  }


  if (answer === 'stay' || busted(total(playerHand))) break;

  if (busted(total(playerHand))) {
    console.log('You busted! The dealer wins.');
  } else {
    console.log('You chose to stay!');
  }

  if (busted(total(dealerHand))) break;
}

