let computer;
let computerSelection;
let humanSelection;
let result;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let resultHumanWins;
let resultTie;
let tie = 0;
let humanWins = 0;
let computerWins = 0;

function humanPlay() {
  humanChoice = prompt(
    "Valid options: 'rock', 'paper', 'scissors'. Case insensitive and empty space insensitive."
  );
  humanSelection = humanChoice.trim().toLowerCase();
}

function computerPlay() {
  computer = Math.floor(Math.random() * 3 + 1);
  computerSelection =
    computer === 1 ? "rock" : computer === 2 ? "paper" : "scissors";
}

function round(computerSelection, humanSelection) {
  result =
    humanSelection === computerSelection
      ? `human: ${humanSelection}\ncomputer: ${computerSelection}\ntie game`
      : humanSelection === "rock" && computerSelection === "paper"
      ? `human: ${humanSelection}\ncomputer: ${computerSelection}\ncomputer wins`
      : humanSelection === "scissors" && computerSelection === "rock"
      ? `human: ${humanSelection}\ncomputer: ${computerSelection}\ncomputer wins`
      : humanSelection === "paper" && computerSelection === "scissors"
      ? `human: ${humanSelection}\ncomputer: ${computerSelection}\ncomputer wins`
      : `human: ${humanSelection}\ncomputer: ${computerSelection}\nhuman wins`;
  resultHumanWins = result.includes("human wins");
  resultTie = result.includes("tie game");

  console.log(result);
}

function game() {
  for (let i = 0; i < 5; i++) {
    humanPlay();
    computerPlay();
    round(computerSelection, humanSelection);

    if (resultTie) {
      ++tie;
    } else if (resultHumanWins) {
      ++humanWins;
    } else {
      ++computerWins;
    }
  }
  if (humanWins === computerWins) {
    console.log("It's a tie!!!");
  } else if (humanWins > computerWins) {
    console.log("SUCK IT, AI!");
  } else {
    console.log("AI is just too lucky...");
  }
}

game();
