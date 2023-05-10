document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector("form");
  let input = document.getElementById("guess");
  let a = document.querySelector("a");
  let paragraph = document.querySelector("p");
  let guessButton = document.querySelectorAll("input")[1];
  let answer;
  let guessCounter;

  function newGame() {
    input.value = null;
    guessButton.classList.remove("disabled");
    guessButton.style.color = "white";
    guessButton.style.boxShadow = "";
    answer = Math.floor(Math.random() * 100) + 1;
    guessCounter = 0;
    paragraph.textContent = "Guess a number from 1 to 100";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    let message;

    if (guess === answer) {
      message = `You guessed it! It took you ${guessCounter} guesses.`;
      guessButton.classList.add("disabled");
      guessButton.style.color = "gray";
      guessButton.style.boxShadow = "5px 10px";
    } else if (guess < answer) {
      message = `My number is higher than ${String(guess)}`;
      guessCounter += 1;
    } else if (guess > answer) {
      message = `My number is lower than ${String(guess)}`;
      guessCounter += 1;
    } else if (Number.isNaN(guess)) {
      message = "That isn't a valid number, please try again";
    }

    paragraph.textContent = message;
  });

  a.addEventListener("click", (event) => {
    event.preventDefault();
    newGame();
  });

  newGame();
});