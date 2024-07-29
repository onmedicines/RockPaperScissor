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
