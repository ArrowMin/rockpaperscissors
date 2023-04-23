const buttons = document.querySelectorAll("button");
const UI = document.querySelector(".UI");
const UI2 = document.querySelector(".UI2");

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
let playerWins = 0;
let computerWins = 0;
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
    computerWins++;
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
  } else {
    playerWins++;
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
  }
}
let rounds = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("press");
    const computerSelection = getComputerChoice();
    UI.textContent = playRound(button.textContent, computerSelection);
    rounds += 1;
    UI2.textContent =
      "Rounds Played: " +
      rounds +
      "\nPlayer Score = " +
      playerWins +
      "\nComputer Score = " +
      computerWins;
    if (playerWins == 5) {
      UI.textContent = "Player Wins!";
      rounds = 0;
      playerWins = 0;
      computerWins = 0;
    }
    if (computerWins == 5) {
      UI.textContent = "Computer Wins!";
      rounds = 0;
      playerWins = 0;
      computerWins = 0;
    }
  });
});
console.log("working");
// for (let i = 0; i < 5; i++) {
//   const playerSelection = prompt("Enter rock paper or scissors");
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
// }
