function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) {
    return "Rock";
  } else if (choice == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.slice(0, 1).toUpperCase() +
    playerSelection.slice(1, playerSelection.length).toLowerCase();
  if (playerSelection == computerSelection) {
    return "Both players picked " + computerSelection + ", therefore a tie.";
  }

  let winner = 0; // 0 - computer 1 - player
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      winner = 0;
    } else {
      winner = 1;
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      winner = 0;
    } else {
      winner = 1;
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      winner = 0;
    } else {
      winner = 1;
    }
  } else {
    return "Invalid player input.";
  }
  if (winner == 0) {
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
  } else {
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
  }
}

for (let i = 0; i < 5; i++) {
  const playerSelection = prompt("Enter rock paper or scissors");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}
