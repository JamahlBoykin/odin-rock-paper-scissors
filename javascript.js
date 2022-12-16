function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    if (randNum === 0) {
        return "Rock";
    }
    else if (randNum === 1) {
        return "Paper";
    }
    else if (randNum === 2) {
        return "Scissors";
    }
    else {
        return "Error"
    }
}