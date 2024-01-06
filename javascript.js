"use strict";

function randomIntFrom(min = 0, max = 3) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

function playRound(playerSelection, computerSelection) {
  let decision = `It's a TIE! Play again`;

  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return (decision = `You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (
    (playerSelection === "scissors" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "rock")
  ) {
    return decision;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (decision = `You win! You beat ${computerSelection} with ${playerSelection}`);
  }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
