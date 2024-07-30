const getComputerChoice = () => {
  const array = ["rock", "paper", "scissor"];
  let computerChoice = array[Math.floor(Math.random() * 3)];
  return computerChoice;
};

const getHumanChoice = () => {
  let humanChoice;
  humanChoice = prompt("what do you choose? :rock, paper or scissor?");
  return humanChoice;
};

let humanScore, computerScore;
humanScore = computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  let human = humanChoice.toLowerCase();
  let computer = computerChoice;

  if (human === computer) {
    console.log("its a tie! both chose " + human);
  } else if (human === "paper" && computer === "rock") {
    humanScore++;
    console.log("You win! paper beats rock");
  } else if (human === "paper" && computer === "scissor") {
    computerScore++;
    console.log("You lose! paper loses to scissor");
  } else if (human === "rock" && computer === "paper") {
    computerScore++;
    console.log("You lose! rock loses to paper");
  } else if (human === "rock" && computer === "scissor") {
    humanScore++;
    console.log("You win! rock beats scissor");
  } else if (human === "scissor" && computer === "paper") {
    humanScore++;
    console.log("You win! scissor beats paper");
  } else if (human === "scissor" && computer === "rock") {
    computerScore++;
    console.log("You lose! scissor loses to paper");
  }
};

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("You win!!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("its a tie");
  }
};

playGame();
