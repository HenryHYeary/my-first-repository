/*
Twenty-one Planning
Nouns:
game, player, dealer, deck, participant, card, suit, rank, points, turn, score
Verbs:
hit, stay, deal, bust, win, lose, tie, hide, reveal

Game:
  new deck
  say hello
  start
  say goodbye
  dealer's hand
  player's hand
  play again?
Deck:
  deal
Player:
  Money: broke = 0, rich = 10
  lose dollar
  gain dollar
  hit
  stay
  bust
  Score
Card
Participant
Dealer:
  hit
  stay
  bust
  Score
*/
const readline = require('readline-sync');

const SUITS = ['S', 'C', 'H', 'D'];
const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q', 'A'];

const MAX_BEFORE_BUST = 21;
const MIN_ACE_VALUE = 1;
const MAX_ACE_VALUE = 11;
const FACE_VALUE = 10;
const DEALER_HIT_LIMIT = 17;

class Deck {
  constructor() {
    this.cards = [];
  }

  set() {
    this.cards = [];
    for (let index = 0; index < SUITS.length; index++) {
      for (let secondIndex = 0; secondIndex < RANKS.length; secondIndex++) {
        this.cards.push([SUITS[index], RANKS[secondIndex]]);
      }
    }
  }

  deal() {
    let randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(randomIndex, 1);
  }
}

class Participant {
  constructor(deck) {
    this.hand = [];
    this.deck = deck;
    this.totalScore = 0;
  }

  hit() {
    this.hand = this.hand.concat(this.deck.deal());
  }

  isBusted() {
    return this.calculateScore() > MAX_BEFORE_BUST;
  }

  joinOr(array, punctuation, conjunction) {
    if (array.length > 1) {
      return array.slice(0, array.length - 1).join(punctuation) + `${punctuation}${conjunction} ${array[array.length - 1]}`;
    } else {
      return String(array[0]);
    }
  }

  stringifyCard(card) {
    let suit;
    let rank;

    switch(card[0]) {
      case 'S': suit = 'Spades';
      break;
      case 'C': suit = 'Clubs';
      break;
      case 'H': suit = 'Hearts';
      break;
      case 'D': suit = 'Diamonds';
      break;
    }

    switch(card[1]) {
      case 'A': rank = 'Ace';
      break;
      case 'J': rank = 'Jack';
      break;
      case 'K': rank = 'King';
      break;
      case 'Q': rank = 'Queen';
      break;
      default: rank = card[1];
    }

    return `${rank} of ${suit}`;
  }

  stringifyHand() {
    return this.hand.map(card => this.stringifyCard(card));
  }

  score(card) {
    if (card[1] === 'A') {
      if ((this.totalScore + MAX_ACE_VALUE) > MAX_BEFORE_BUST) {
        return MIN_ACE_VALUE;
      } else {
        return MAX_ACE_VALUE;
      }
    } else if (['J', 'K', 'Q'].includes(card[1])) {
      return FACE_VALUE;
    } else {
      return card[1];
    }
  }

  calculateScore() {
    this.totalScore = 0;
    this.hand.forEach(card => this.totalScore += this.score(card));
    return this.totalScore;
  }
}

class Player extends Participant {
  constructor(deck) {
    super(deck);
    this.money = 5;
  }

  choose() {
    while (!(this.isBusted())) {
      console.log('Hit or stay? h/s');
      let answer = readline.question();
      if (answer[0].toLowerCase() === 'h') {
        this.hit();
        console.log('----------------');
        this.showHand();
        this.showScore();
        console.log('----------------');
      } else if (answer[0].toLowerCase() === 's') {
        break;
      } else {
        console.log('Invalid input.');
      }
    }
  }

  showScore() {
    console.log(`Player has ${this.calculateScore()}.`);
  }

  showHand() {
    console.log(`Player has ${this.joinOr(this.stringifyHand(this.hand), ', ', 'and')}.`);
  }

  showMoney() {
    console.log(`You have $${this.money}.`);
  }

  isBrokeOrRich() {
    if (this.money === 10) {
      console.log('Congrats! You are now rich!');
      return true;
    } else if (this.money === 0) {
      console.log(`Looks like you are broke for now. Better luck next time.`);
      return true;
    }

    return false;
  }
}

class Dealer extends Participant {
  constructor(deck) {
    super(deck);
  }

  showHalfOfHand() {
    console.log(`Dealer has unknown card and ${this.stringifyCard(this.hand[1])}`);
  }

  unknownScore() {
    console.log(`Dealer has unknown score`);
  }

  showScore() {
    console.log(`Dealer has ${this.calculateScore()}.`);
  }

  showHand() {
    console.log(`Dealer has ${this.joinOr(this.stringifyHand(this.hand), ', ', 'and')}.`);
  }

  turn() {
    if (this.calculateScore() < DEALER_HIT_LIMIT) {
      while (this.calculateScore() < DEALER_HIT_LIMIT) {
        this.hit();
        console.log('Dealer hits.');
        this.showHand();
        this.showScore();
        console.log('----------------');
      }
    } else {
      console.log('Dealer stays');
      this.showHand();
      this.showScore();
      console.log('----------------');
    }
  }
}

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player(this.deck);
    this.dealer = new Dealer(this.deck);
  }

  start() {
    this.deck.set();
    this.displayWelcomeMessage();
    while (true) {
      this.dealCards();
      this.showCards();
      this.player.choose();
      if (!(this.player.isBusted())) {
        this.dealer.turn();
      }
      this.displayResult();
      if (this.player.isBrokeOrRich() || !this.playAgain()) break;
      console.clear();
    }
    this.displayGoodbyeMessage();
  }

  playAgain() {
    console.log('Play again? y/n');
    let answer = readline.question();
    return answer[0].toLowerCase() === 'y';
  }

  dealCards() {
    for (let count = 1; count <= 2; count++) {
      this.player.hit();
      this.dealer.hit();
    }
  }

  displayWelcomeMessage() {
    console.clear()
    console.log('Welcome to twenty one!');
    console.log('----------------');
    console.log('You currently have $5.');
    console.log('If you get to $10 you are rich!')
    console.log('If you reach $0 you are broke.');
    console.log('----------------');
  }

  displayGoodbyeMessage() {
    console.log('Thank you for playing twenty one!');
  }

  showCards() {
    this.player.showHand();
    this.dealer.showHalfOfHand();
    console.log('----------------');
    this.player.showScore();
    this.dealer.unknownScore();
  }

  displayResult() {
    if (this.player.isBusted()) {
      console.log('You busted! Dealer wins.');
      this.player.money -= 1;
    } else if (this.dealer.isBusted()) {
      console.log('Dealer busted! You win!');
      this.player.money += 1;
    } else if (this.player.calculateScore() > this.dealer.calculateScore()) {
      console.log('Congrats, you win!');
      this.player.money += 1;
    } else if (this.player.calculateScore() < this.dealer.calculateScore()) {
      console.log('Drats, the dealer won.');
      this.player.money -= 1;
    } else {
      console.log('You tied.');
    }

    this.player.showMoney();

    this.deck.set();
    this.player.hand = [];
    this.dealer.hand = [];
  }
}

let game = new TwentyOneGame();
game.start();