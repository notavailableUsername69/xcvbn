function playGame(userChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  var result = "";

  if (userChoice === computerChoice) {
      result = `You chose ${userChoice}, the computer chose ${computerChoice}. It's a tie!`;
  } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
  ) {
      result = `You chose ${userChoice}, the computer chose ${computerChoice}. You win!`;
  } else {
      result = `You chose ${userChoice}, the computer chose ${computerChoice}. You lose!`;
  }

  var userHandElement = document.getElementById("userHand");
  var computerHandElement = document.getElementById("computerHand");

  userHandElement.textContent = getHandGesture(userChoice);
  computerHandElement.textContent = getHandGesture(computerChoice);

  var resultElement = document.getElementById("result");
  resultElement.textContent = result;
}

function getHandGesture(choice) {
  switch (choice) {
      case "rock":
          return `    
    ________
---' ________)
    (_________)
    (________)
    (_______)
---._(____)`;
      case "paper":
          return `_____
---'   ____)_____
        __________)
        ____________)
       ___________)
---.____________)`;
      case "scissors":
          return`___ 
---'   ____)________
        _____________)
     __________________)
    (_______)
---.__(_____)`;
      default:
          return "";
  }
}