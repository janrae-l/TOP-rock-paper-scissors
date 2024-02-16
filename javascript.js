"use strict";

function randomIntFrom(min = 0, max = 3) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getComputerChoice() {
  const choice = ["scissors", "rock", "paper"];
  const compChoice = choice[randomIntFrom()];
  return compChoice;
}

function playerPrompt() {
  let playerChoice;
  while (
    playerChoice !== "scissors" &&
    playerChoice !== "rock" &&
    playerChoice !== "paper"
  ) {
    playerChoice = prompt("Rock, Paper, Scissors").toLowerCase();
  }

  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  let decision = `It's a TIE! Play again`;

  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    decision = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    console.log(`It's a TIE! Play again`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `You win! You beat ${computerSelection} with ${playerSelection}`
    );
    decision = `You win! You beat ${computerSelection} with ${playerSelection}`;
  }
  return decision;
}

function game() {
  let compScore = 0;
  let userScore = 0;
  let tieScore = 0;

  for (let i = 0; i < 5; i++) {
    let player = playerPrompt();
    console.log(player);

    let computerOpt = getComputerChoice();
    console.log(computerOpt);

    let result = playRound(player, computerOpt);

    if (result.includes("lose")) {
      compScore++;
    } else if (result.includes("win")) {
      userScore++;
    } else if (result.includes("TIE")) {
      tieScore++;
    }
  }
  if (tieScore > compScore + userScore) {
    console.log(`There are ${tieScore} tie scores. No one won the game`);
  } else {
    const gameResult = compScore > userScore ? "Computer" : "User";
    console.log(
      `${gameResult} won the game with ${
        compScore > userScore ? compScore : userScore
      } scores and there ${tieScore >= 2 ? "are" : "is"} ${tieScore} tie score`
    );
  }
}

game();
