// Declaring global variables
let humanScore, computerScore, ties;
humanScore = computerScore = ties = 0;
let roundStatus = "";

// declaring references to html elements
const playerWins = document.querySelector("#player-wins");
const playerLosses = document.querySelector("#player-losses");
const playerTies = document.querySelector("#player-ties");
const displayStatus = document.querySelector("#display-status");
const displayHumanChoice = document.querySelector("#display-player-choice");
const displayComputerChoice = document.querySelector("#display-computer-choice");
const choiceButtonContainer = document.querySelector("#choice-button-container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

// initializing references to html elements

// activates on clicking any button (rock,paper,scissor) by the user
choiceButtonContainer.addEventListener("click", (e) => {
  let humanChoice = e.target.id;
  let computerChoice = getComputerChoice();
  displayHumanChoice.textContent = humanChoice;
  displayComputerChoice.textContent = computerChoice;
  playRound(humanChoice, computerChoice);
  playerTies.textContent = ties.toString();
  playerWins.textContent = humanScore.toString();
  playerLosses.textContent = computerScore.toString();
  displayStatus.textContent = roundStatus;
});

const getComputerChoice = () => {
  const array = ["rock", "paper", "scissor"];
  let computerChoice = array[Math.floor(Math.random() * 3)];
  return computerChoice;
};

const playRound = (humanChoice, computerChoice) => {
  let human = humanChoice.toLowerCase();
  let computer = computerChoice;

  if (human === computer) {
    ties++;
    roundStatus = "its a tie! both chose " + human;
  } else if (human === "paper" && computer === "rock") {
    humanScore++;
    roundStatus = "You win! paper beats rock";
  } else if (human === "paper" && computer === "scissor") {
    computerScore++;
    roundStatus = "You lose! paper loses to scissor";
  } else if (human === "rock" && computer === "paper") {
    computerScore++;
    roundStatus = "You lose! rock loses to paper";
  } else if (human === "rock" && computer === "scissor") {
    humanScore++;
    roundStatus = "You win! rock beats scissor";
  } else if (human === "scissor" && computer === "paper") {
    humanScore++;
    roundStatus = "You win! scissor beats paper";
  } else if (human === "scissor" && computer === "rock") {
    computerScore++;
    roundStatus = "You lose! scissor loses to paper";
  }
};
