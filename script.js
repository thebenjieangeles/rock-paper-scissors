const computerPlay = () => {
  let options = ["ROCK", "PAPER", "SCISSORS"];
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

let playerSelection = prompt("Rock, Paper, or Scissors?");
let computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {
  console.log(`Computer chose ${computerSelection}!`);
  playerSelection = playerSelection.toUpperCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return "You win! ";
  } else {
    return "You lose! ";
  }
};

console.log(playRound(playerSelection, computerSelection));
