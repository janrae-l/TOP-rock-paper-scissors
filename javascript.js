"use strict";

function randomIntFrom(min = 0, max = 3) {
  return Math.floor(Math.random() * (max - min + min) + min);
}
function getComputerChoice() {
  const choice = ["Scissors", "Rock", "Paper"];
  const compChoice = choice[randomIntFrom()];
  return compChoice;
}

console.log(getComputerChoice());
