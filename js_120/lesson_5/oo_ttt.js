let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static COMPUTER_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  toString() {
    return this.marker;
  }

  getMarker() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let count = 1; count <= 9; count++) {
      this.squares[String(count)] = new Square();
    }
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

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
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];

  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    console.clear();
    this.displayWelcomeMessage();

    while (true) {
      this.board = new Board();

      while (true) {
        this.board.display();
  
        this.humanMoves();
        if (this.gameOver()) break;
  
        this.computerMoves();
        if (this.gameOver()) break;
        console.clear();
      }
  
      this.displayResults();
      if (!this.playAgain()) break;
      console.clear();
    }
    
    this.displayGoodbyeMessage();
  }

  playAgain() {
    console.log('Would you like to play again? y/n');
    let answer = readline.question();
    return answer[0].toLowerCase() === 'y';
  }

  joinOr(array, punctuation, conjunction) {
    if (array.length > 1) {
      return array.slice(0, array.length - 1).join(punctuation) + `${punctuation}${conjunction} ${array[array.length - 1]}`;
    } else {
      return String(array[0]);
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${this.joinOr(validChoices, ', ', 'or')}): `;
      console.log(prompt);
      choice = readline.question('Choose a square between 1 and 9: ');

      if (validChoices.includes(choice)) break;

      console.log(`Sorry, that's not a valid choice.`);
      console.log('');
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  containsUnusedSquare(row) {
    for (let index = 0; index < row.length; index++) {
      if (this.board.squares[row[index]].isUnused()) {
        return true;
      }
    }
    
    return false;
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;
    let winningRow = TTTGame.POSSIBLE_WINNING_ROWS.filter(row => {
      return this.board.countMarkersFor(this.computer, row) === 2 && this.containsUnusedSquare(row);
    }).shift() || [];

    let atRiskRow = TTTGame.POSSIBLE_WINNING_ROWS.filter(row => {
      return this.board.countMarkersFor(this.human, row) === 2 && this.containsUnusedSquare(row);
    }).shift() || [];

    if (this.board.squares['5'].isUnused()) {
      choice = '5';
    } else if (winningRow.length !== 0) {
      choice = winningRow.find(square => this.board.squares[square].isUnused());
    } else if (atRiskRow.length !== 0) {
      choice = atRiskRow.find(square => this.board.squares[square].isUnused());
    } else {
      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }


    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }

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
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }
}


let game = new TTTGame();
game.play();