"use strict";

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
let compScore = 0;
let userScore = 0;

function playRound(playerSelection, computerSelection) {
  let decision;

  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    compScore++;
    return (decision = `You lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === computerSelection) {
    return (decision = `It's a TIE! Play again`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userScore++;
    return (decision = `You win! You beat ${computerSelection} with ${playerSelection}`);
  }
}
/*function game() {
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
  }*/

//game();

function game(userChoice) {
  const computerSelection = getComputerChoice();
  const result = playRound(userChoice, computerSelection);

  playerScore.textContent = userScore;
  computerScore.textContent = compScore;

  resultDply.textContent = result;

  if (userScore === 5 || compScore === 5) {
    resultDply.textContent += `
    ${playerScore > compScore ? "You win!" : "The computer wins, you lose"}`;
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
    playAgainBtn.disabled = false;
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDply = document.querySelector(".results");

const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".compScore");

const playAgainBtn = document.querySelector(".playAgainBtn");
playAgainBtn.disabled = true;

const choicesBtn = document.querySelector(".choices");

playAgainBtn.addEventListener("click", function () {
  userScore = 0;
  compScore = 0;

  playerScore.textContent = userScore;
  computerScore.textContent = compScore;

  rockBtn.disabled = false;
  scissorsBtn.disabled = false;
  paperBtn.disabled = false;
});

choicesBtn.addEventListener("click", function () {
  let target = event.target;
  let playerSelection = "";

  switch (target.id) {
    case "rock":
      playerSelection = "rock";
      break;
    case "paper":
      playerSelection = "paper";
      break;
    case "scissors":
      playerSelection = "scissors";
      break;
  }
  game(playerSelection);
});

/*
function playGame(userChoice) {
  const computerSelection = getComputerChoice();
  const result = playRound(userChoice, computerSelection);
  resultDply.textContent = result;

  playerScore.textContent = userScore;
  computerScore.textContent = compScore;

  if (compScore === 5) {
    resultDply.textContent = `The computer won with ${compScore} scores`;
  } else if (userScore === 5) {
    resultDply.textContent = `The computer won with ${userScore} scores.`;
  }
}

rockBtn.addEventListener("click", function () {
  playGame("rock");
});

paperBtn.addEventListener("click", function () {
  playGame("paper");
});
scissorsBtn.addEventListener("click", function () {
  playGame("scissors");
});*/
