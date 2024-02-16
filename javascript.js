"use strict";

function randomIntFrom(min = 0, max = 3) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  let choice;
  switch (randNum) {
    case 0:
      choice = "scissors";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "rock";
      break;
  }
  return choice;
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
//console.log(getComputerChoice(), playerPrompt());

function playRound(playerSelection, computerSelection) {
  let decision;

  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    //console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return (decision = `You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === computerSelection) {
    //console.log(`It's a TIE! Play again`);
    return (decision = `It's a TIE! Play again`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    /*console.log(
      `You win! You beat ${computerSelection} with ${playerSelection}`
    );*/
    return (decision = `You win! You beat ${computerSelection} with ${playerSelection}`);
  }
}
function game() {
  let compScore = 0;
  let userScore = 0;
  let tieScore = 0;

  /*  for (let i = 0; i < 5; i++) {
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
  }*/
}

game();

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDply = document.querySelector(".results");

rockBtn.addEventListener("click", function () {
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  resultDply.textContent = playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", function () {
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  resultDply.textContent = playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", function () {
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  resultDply.textContent = playRound(playerSelection, computerSelection);
});
