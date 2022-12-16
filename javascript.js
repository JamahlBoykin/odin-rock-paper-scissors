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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const outcome = playRound(getPlayerChoice(), getComputerChoice());
    console.log(outcome);

    if (outcome.includes("win")) {
      playerScore++;
    } else if (outcome.includes("lose")) {
      computerScore++;
    } else if (outcome.includes("tie")) {
      i--;
    }

    if (playerScore === 3 || computerScore === 3) {
        break;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won the best of five with a score of ${playerScore}-${computerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`You lost the best of five with a score of ${playerScore}-${computerScore}.`);
  } else {
    console.log(`Error. \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
  }
}