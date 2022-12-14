const getPlayerSelection = (playerInput) => {
  playerInput = playerInput.toLowerCase();
  if (
    playerInput === "rock" ||
    playerInput === "scissors" ||
    playerInput === "paper"
  ) {
    return playerInput;
  } else {
    return "Error, please type: rock, paper, or scissors.";
  }
};

const getComputerSelection = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "This game is a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return "You lose, computer won!";
  } else {
    return "Congratulations, you won!";
  }
};

const game = () => {
  const playerSelection = getPlayerSelection("rock");
  const computerSelection = getComputerSelection();
  console.log(`You choose ${playerSelection}`);
  console.log(`The computer choose ${computerSelection}`);

  console.log(playRound(playerSelection, computerSelection));
};

game();
