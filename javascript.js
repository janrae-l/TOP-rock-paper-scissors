"use strict";

function randomIntFrom(min = 0, max = 3) {
  return Math.floor(Math.random() * (max - min + min) + min);
}
function getComputerChoice() {
  const choice = ["scissors", "rock", "paper"];
  const compChoice = choice[randomIntFrom()];
  return compChoice;
}

//console.log(getComputerChoice());

// function playerPrompt() {
//   const playerChoice = prompt(
//     "Choose between rock, paper, scissors"
//   ).toLowerCase();

//   return playerChoice;
// }

//const playerMove = playerPrompt();
//console.log(playerMove);

const playerSelection = "rock";
const computerSelection = "scissors";

if (
  (playerSelection === "scissors" && computerSelection === "rock") ||
  (playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors")
) {
  console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
} else if (
  (playerSelection === "scissors" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "paper") ||
  (playerSelection === "rock" && computerSelection === "rock")
) {
  console.log(`It's a tie! Play again`);
} else if (
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissors" && computerSelection === "paper")
) {
  console.log(`You win! You beat ${computerSelection} with ${playerSelection}`);
}
