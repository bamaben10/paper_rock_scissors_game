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

// console.log(getPlayerSelection("rock"));
// console.log(getPlayerSelection("apple"));

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

// console.log(getComputerSelection());
// console.log(getComputerSelection());
// console.log(getComputerSelection());

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "This game is a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You lose, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
};

// console.log(playRound("rock", "scissors"));
// console.log(playRound("paper", "scissors"));
// console.log(playRound("paper", "paper"));

const game = () => {
  const playerSelection = getPlayerSelection("Paper");
  const computerSelection = getComputerSelection();
  console.log(`You choose ${playerSelection}`);
  console.log(`The computer chose ${computerSelection}`);

  console.log(playRound(playerSelection, computerSelection));
};

game();

// const game = (playRound) => {
//   for (let i = 0; i < 5; i++) {}
//   playRound();
// };
