/*
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
*/
class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
  }
  addWin() {
    this.wins++;
  }
  resetWins() {
    this.wins = 0;
  }
}

class Game {
  constructor(player, computer, buttons, UI, UI2) {
    this.player = player; // Player instance
    this.computer = computer; // Computer (another instance of Player)
    this.buttons = buttons; // Buttons for player input
    this.UI = UI; // UI element to display results
    this.UI2 = UI2; // UI element to display score
    this.rounds = 0; // Track the number of rounds
    this.init();
  }

  // Method to get a random choice for the computer
  getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Method to handle a single round of the game
  playRound(playerSelection, computerSelection) {
    playerSelection =
      playerSelection.slice(0, 1).toUpperCase() +
      playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
      return `Both players picked ${computerSelection}, therefore a tie.`;
    }

    const outcomes = {
      Rock: { beats: "Scissors", losesTo: "Paper" },
      Paper: { beats: "Rock", losesTo: "Scissors" },
      Scissors: { beats: "Paper", losesTo: "Rock" },
    };

    if (outcomes[playerSelection].beats === computerSelection) {
      this.player.addWin();
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      this.computer.addWin();
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
  }

  // Method to initialize the game
  init() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const computerSelection = this.getComputerChoice();
        this.UI.textContent = this.playRound(
          button.textContent,
          computerSelection
        );
        this.rounds++;
        this.updateScore();
        this.checkWinner();
      });
    });
  }

  // Method to update the score display
  updateScore() {
    this.UI2.textContent = `
      Rounds Played: ${this.rounds}
      Player Score: ${this.player.wins}
      Computer Score: ${this.computer.wins}
    `;
  }

  // Method to check if the player or computer has won
  checkWinner() {
    if (this.player.wins === 5) {
      this.UI.textContent = "Player Wins!";
      this.resetGame();
    } else if (this.computer.wins === 5) {
      this.UI.textContent = "Computer Wins!";
      this.resetGame();
    }
  }

  // Method to reset the game
  resetGame() {
    this.rounds = 0;
    this.player.resetWins();
    this.computer.resetWins();
    this.updateScore();
  }
}

// Set up the game
const player = new Player("Player");
const computer = new Player("Computer");

const buttons = document.querySelectorAll("button");
const UI = document.querySelector(".UI");
const UI2 = document.querySelector(".UI2");

const game = new Game(player, computer, buttons, UI, UI2);
