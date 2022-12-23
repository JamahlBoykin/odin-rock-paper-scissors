let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');
const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    resetWinnerText();
    playRound(button.id, getComputerChoice());
    updateScore();
    checkForWinner();
  });
});

function resetWinnerText() {
  if (typeof winner.textContent === "string") {
    winner.textContent = null;
  }
}

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);

  if (randNum === 0) {
    return "Rock";
  } else if (randNum === 1) {
    return "Paper";
  } else if (randNum === 2) {
    return "Scissors";
  } else {
    return "Error";
  }
}

function playRound(playerSelection, computerSelection) {
  const computer = computerSelection;
  const player = playerSelection;

  if (computer.toLowerCase() === player) {
    results.textContent = "It's a tie!";
  } else if (computer === "Rock") {
    if (player === "paper") {
      playerScore++;
      results.textContent = "You win! Paper beats Rock.";
    } else {
      computerScore++;
      results.textContent = "You lose! Scissors loses to Rock.";
    }
  } else if (computer === "Paper") {
    if (player === "scissors") {
      playerScore++;
      results.textContent = "You win! Scissors beats Paper.";
    } else {
      computerScore++;
      results.textContent = "You lose! Rock loses to Paper.";
    }
  } else if (computer === "Scissors") {
    if (player === "rock") {
      playerScore++;
      results.textContent = "You win! Rock beats Scissors.";
    } else {
      computerScore++;
      results.textContent = "You lose! Paper loses to Scissors.";
    }
  }
}

function updateScore() {
  player.textContent = "Player: " + playerScore;
  computer.textContent = "Computer: " + computerScore;
}

function checkForWinner() {
  if (playerScore === 5) {
    winner.textContent += "Congratulations, you were the first to win 5 rounds!"          
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winner.textContent += "The computer was the first to win 5 rounds. Game over."
    playerScore = 0;
    computerScore = 0;
  }
}