"use strict";

function randomIntFrom(min = 0, max = 3) {
  return Math.floor(Math.random() * (max - min + min) + min);
}
function getComputerChoice() {
  const choice = ["scissors", "rock", "paper"];
  const compChoice = choice[randomIntFrom()];
  return compChoice;
}

console.log(getComputerChoice());

function playerSelection() {
  const playerChoice = prompt(
    "Choose between rock, paper, scissors"
  ).toLowerCase();

  return playerChoice;
}

const playerMove = playerSelection();
console.log(playerMove);
