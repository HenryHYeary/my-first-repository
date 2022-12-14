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
const POINTS_TO_WIN = 5;
const DEALER_HIT_LIMIT = 17;
const MAX_SCORE_BEFORE_BUST = 21;

let playerPoints = 0;
let dealerPoints = 0;


function initalizeDeck() {
  let deck = [];

  for (let index = 2; index <= 10; index++) {
    SUITS.forEach(suit => {
      deck.push([suit, `${index}`]);
    });
  }

  FACE_CARDS.forEach(face => {
    SUITS.forEach(suit => {
      deck.push([suit, face]);
    });
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
    if (sum > MAX_SCORE_BEFORE_BUST) sum -= 10;
  });

  return sum;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function joinOr(arr, delimiter = ', ', conjunction = 'or') {
  let finalElement = String(arr[arr.length - 1]);
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return arr.join();
    case 2:
      return `${String(arr[0])} ${conjunction} ${String(arr[1])}`;
    default:
      return `${arr.slice(0, arr.length - 1).join(delimiter)} ${conjunction} ${finalElement}`;
  }
}

function hand(cards) {
  let valuesOnly = [];
  cards.forEach(card => {
    valuesOnly.push(card[1]);
  });

  return joinOr(valuesOnly, ', ', 'and');
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
}

function busted(total) {
  return total > MAX_SCORE_BEFORE_BUST;
}

function dealersTurn (dealerHand, dealerTotal, deck) {
  prompt(`Dealer's turn...`);

  while (dealerTotal < DEALER_HIT_LIMIT) {
    prompt('Dealer hits.');
    dealerHand.push(deck.pop());
    dealerTotal = total(dealerHand);

    prompt(`Dealer's hand is now ${hand(dealerHand)}.`);
  }
}

function determineResult(playerTotal, dealerTotal) {
  if (playerTotal > MAX_SCORE_BEFORE_BUST) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > MAX_SCORE_BEFORE_BUST) {
    return 'DEALER_BUSTED';
  } else if (playerTotal > dealerTotal) {
    return 'PLAYER';
  } else if (playerTotal < dealerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResult(playerTotal, dealerTotal) {
  let result = determineResult(playerTotal, dealerTotal);

  switch (result) {
    case 'PLAYER_BUSTED': prompt(`You busted, the dealer wins!`);
      break;
    case 'DEALER_BUSTED': prompt(`The dealer busted, you win!`);
      break;
    case 'PLAYER': prompt(`Congratulations, you won!`);
      break;
    case 'DEALER': prompt(`The dealer wins!`);
      break;
    case 'TIE': prompt(`It's a tie!`);
      break;
  }
}

function incrementScores(playerTotal, dealerTotal) {
  let winner = determineResult(playerTotal, dealerTotal);

  if (winner === 'PLAYER' || winner === 'DEALER_BUSTED') {
    playerPoints += 1;
  } else if (winner === 'DEALER' || winner === 'PLAYER_BUSTED') {
    dealerPoints += 1;
  }

  displayResult(playerTotal, dealerTotal);
}

function showTotalScores(playerPoints, dealerPoints) {
  console.log(`-----------------------`);
  console.log(`| Your score is: ${playerPoints} | The dealer's score is: ${dealerPoints} | First to ${POINTS_TO_WIN} wins.`);
  console.log('-----------------------');

  determineOverallWinner(playerPoints, dealerPoints);
}

function determineOverallWinner(playerPoints, dealerPoints) {
  if (playerPoints === POINTS_TO_WIN) {
    prompt(`You win the match!`);
    resetScores();
  } else if (dealerPoints === POINTS_TO_WIN) {
    prompt(`Dealer wins the match!`);
    resetScores();
  }
}

function resetScores() {
  playerPoints = 0;
  dealerPoints = 0;
}

function playAgain() {
  prompt('Would you like to play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer === 'n') {
    return false;
  } else if (answer === 'y') {
    return true;
  } else {
    prompt('Invalid input, please try again.');
    answer = readline.question().toLowerCase()[0];
  }
}

function hitOrStay() {
  prompt(`Hit or stay? (h or s).`);
  let answer = readline.question().toLowerCase()[0];
  if (answer === 's') {
    return false;
  } else if (answer === 'h') {
    return true;
  } else {
    prompt('Invalid input, please try again.');
    answer = readline.question().toLowerCase()[0];
  }
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function endOfRound(playerHand, dealerHand) {
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  console.log('============');
  prompt(`Dealer has ${hand(dealerHand)}, for a total of ${dealerTotal}`);
  prompt(`Player has ${hand(playerHand)}, for a total of ${playerTotal}`);
  console.log('============');
}

while (true) {
  prompt('Welcome to twenty one!');

  let deck = initalizeDeck();
  let playerHand = [];
  let dealerHand = [];

  playerHand.push(...popTwoFromDeck(deck));
  dealerHand.push(...popTwoFromDeck(deck));

  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  prompt(`Dealer has ${dealerHand[0][1]} and ?`);
  prompt(`Player has ${hand(playerHand)}, for a total of ${playerTotal}`);

  while (true) {
    let playerTurn = hitOrStay();

    if (playerTurn === true) {
      playerHand.push(deck.pop());
      playerTotal = total(playerHand);

      prompt('You chose to hit.');
      prompt(`Your hand is now: ${hand(playerHand)}`);
      prompt(`Your total is now: ${playerTotal}`);
    }

    if (playerTurn === false || busted(playerTotal)) break;
  }

  if (busted(playerTotal)) {
    endOfRound(playerHand, dealerHand);
    incrementScores(playerTotal, dealerTotal);
    showTotalScores(playerPoints, dealerPoints);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal}`);
  }

  dealersTurn(dealerHand, dealerTotal, deck);

  if (busted(dealerTotal)) {
    prompt(`Dealer's  total is now: ${dealerTotal}`);
    endOfRound(playerHand, dealerHand);
    incrementScores(playerTotal, dealerTotal);
    showTotalScores(playerPoints, dealerPoints);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }

  endOfRound(playerHand, dealerHand);
  incrementScores(playerTotal, dealerTotal);
  showTotalScores(playerPoints, dealerPoints);

  if (!playAgain()) break;
}
