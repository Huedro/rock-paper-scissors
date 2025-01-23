// Player write which of the 3 options he has 
// Computer calls a function that randomly returns one of the 3 options 
// The game tests who beats who
// Show Victory or Defeat to the player

playGame();

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    
    if (randomNumber >= 0 && randomNumber <= 33.33) {
        return "rock";
    } else if (randomNumber >= 33.33 && randomNumber <= 66.66) {
        return "paper";
    }
    
    return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return humanChoice;
}

function playGame() {    
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "rock" 
            || humanChoice === "scissors" && computerChoice === "paper") 
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock"
         ) 
         {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else {
            console.log(`You two chose ${humanChoice}! It's a DRAW.`)
        }
    
        console.log(`SCORE: ${humanScore}x${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You won the game!!!");
    } else if (computerScore > humanScore) {
        console.log("Uhmm... It seems you lost the game. Wanna try again? Refresh.");
    } else {
        console.log("It's a COMPLETE DRAW!! That's weird, huh.")
    }
}