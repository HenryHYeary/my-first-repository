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
    deck.push([suit, 'Ace']);
  });

  return shuffle(deck);
}

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'Ace') {
      sum += 11;
    } else if (FACE_CARDS.includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'Ace').forEach(_ => {
    if (sum > 21) sum -=10;
  });

  return sum;
}

function prompt(message) {
  console.log(`=> ${message}`);
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
      let finalElement = String(arr[arr.length - 1]);
      return `${arr.slice(0, arr.length - 1).join(delimiter)} ${conjunction} ${finalElement}`
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let otherIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[otherIndex]] = [array[otherIndex], array[i]];
  }

  return array;
}

function busted(cards) {
  return total(cards) > 21;
}

function determineResult(playerHand, dealerHand) {
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResult(playerHand, dealerHand) {
  let result = determineResult(playerHand, dealerHand);

  switch (result) {
    case 'PLAYER_BUSTED': prompt('You busted, the dealer wins!');
    break;
    case 'DEALER_BUSTED': prompt('The dealer busted, you win!');
    break;
    case 'PLAYER': prompt('Congratulations, you won!');
    break;
    case 'DEALER': prompt('The dealer wins!');
    break;
    case 'TIE': prompt(`It's a tie!`);
    break;
  }
}

function playAgain() {
  prompt('Would you like to play again? (y or n)');
  let answer = readline.question();
  return (answer.toLowerCase()[0] === y);
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

while (true) {
  prompt('Welcome to twenty one!');

  let deck = initalizeDeck();
  let playerHand = [];
  let dealerHand = [];

  playerHand.push(...popTwoFromDeck(deck));
  dealerHand.push(...popTwoFromDeck(deck));

  prompt(`Dealer has ${dealerHand[0][1]} and ?`);
  prompt(`Player has ${joinOr(([playerHand[0][1], playerHand[1][1]]), ', ', 'and')}, for a total of ${total(playerHand)}`);

  while (true) {
    
  }
}
