let readline = require('readline-sync');

let Square = {
  UNUSED_SQUARE: ' ',
  HUMAN_MARKER: 'X',
  COMPUTER_MARKER: 'O',

  init(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
    return this;
  },

  toString() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  },

  getMarker() {
    return this.marker;
  },
};

let Board = {
  init() {
    this.squares = {};
    for (let count = 1; count <= 9; count++) {
      this.squares[String(count)] = Object.create(Square).init();
    }
    return this;
  },

  isFull() {
    return this.unusedSquares().length === 0;
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  },

  display() {
    console.log('');
    console.log('     |     |');
    console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}`);
    console.log('     |     |');
    console.log('');
  },
};

let PlayerPrototype = {
  initialize(marker) {
    this.marker = marker;
    return this;
  },

  getMarker() {
    return this.marker;
  },
};

let Human = Object.create(PlayerPrototype);

Human.init = function() {
  return this.initialize(Square.HUMAN_MARKER);
}

let Computer = Object.create(PlayerPrototype);

Computer.init = function() {
  return this.initialize(Square.COMPUTER_MARKER);
}

let TTTGame = {
  POSSIBLE_WINNING_ROWS: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ],

  init() {
    this.board = Object.create(Board).init();
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    return this;
  },

  play() {
    console.clear();
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
      console.clear();
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  },

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${validChoices.join(', ')}): `;
      console.log(prompt);
      choice = readline.question('Choose a square between 1 and 9: ');

      if (validChoices.includes(choice)) break;

      console.log(`Sorry, that's not a valid choice.`);
      console.log('');
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  },

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  },

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  },

  displayResults() {
    console.clear();
    this.board.display();
    if (this.isWinner(this.human)) {
      console.log('You won! Congratulations!');
    } else if (this.isWinner(this.computer)) {
      console.log('I won! I won! Take that, human!');
    } else {
      console.log('A tie game. How boring.');
    }
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },
};


let game = Object.create(TTTGame).init();
game.play();
