const getComputerChoice = () => {
  const array = ["rock", "paper", "scissor"];
  let computerChoice = array[Math.floor(Math.random() * 3)];
  return computerChoice;
};
