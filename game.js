// Player write which of the 3 options he has 
// Computer calls a function that randomly returns one of the 3 options 
// The game tests who beats who
// Show Victory or Defeat to the player

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.textContent;
        playRound(humanChoice, getComputerChoice());

        if (humanScore >= 5 || computerScore >= 5) {
            winGame();
        }
    });    
});

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    
    if (randomNumber >= 0 && randomNumber <= 33.33) {
        return "rock";
    } else if (randomNumber >= 33.33 && randomNumber <= 66.66) {
        return "paper";
    }
    
    return "scissors";
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "scissors" && computerChoice === "paper") 
    {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock"
     ) 
     {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else {
        results.textContent = `You two chose ${humanChoice}! It's a DRAW.`;
    }

    score.textContent = `SCORE: ${humanScore}x${computerScore}`;
}

function winGame() {    
    if (humanScore > computerScore) {
        score.textContent = "Congrats! You won the game!!!";
    } else if (computerScore > humanScore) {
        score.textContent = "Uhmm... It seems you lost the game. Wanna try again? Refresh.";
    } else {
        score.textContent = "It's a COMPLETE DRAW!! That's weird, huh.";
    }
}