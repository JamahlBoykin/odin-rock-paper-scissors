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

function getPlayerChoice() {
  return prompt("Please enter either Rock, Paper, or Scissors.");
}

function playRound(playerSelection, computerSelection) {
  const computer = computerSelection;
  const player = playerSelection.toLowerCase();

  if (computer.toLowerCase() === player) {
    return "It's a tie!";
  }

  if (computer === "Rock") {
    if (player === "paper") {
      return "You win! Paper beats Rock.";
    } else {
      return "You lose! Rock beats Scissors.";
    }
  } else if (computer === "Paper") {
    if (player === "scissors") {
      return "You win! Scissors beats Paper.";
    } else {
      return "You lose! Paper beats Rock.";
    }
  } else if (computer === "Scissors") {
    if (player === "rock") {
      return "You win! Rock beats Scissors.";
    } else {
      return "You lose! Scissors beats paper.";
    }
  }
}