function computerPlay() {
    let computerScore = Math.floor(Math.random() * 3) + 1;
    return computerScore === 1 ? "rock" :
        computerScore === 2 ? "paper" :
        computerScore === 3 ? "scissors" :
        "Error";
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        return computerSelection === "paper" ? [0, 1, "You lose, paper beats rock!"] :
            computerSelection === "scissors" ? [1, 0, "You win, rock beats scissors!"] :
            computerSelection === "rock" ? [0, 0, "Tie!"] :
            "Error";
    }
    else if (playerSelection === "paper") {
        return computerSelection === "rock" ? [1, 0, "You win, paper beats rock!"] :
            computerSelection === "scissors" ? [0, 1, "You lose, scissors beats paper!"] :
            computerSelection === "paper" ? [0, 0, "Tie!"] :
            "Error";
    }
    else {
        return computerSelection === "rock" ? [0, 1, "You lose, rock beats scissors!"] :
            computerSelection === "paper" ? [1, 0, "You win, scissors beats paper!"] :
            computerSelection === "scissors" ? [0, 0, "Tie!"] :
            "Error";
    }

}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    let playerSelection;
    while (true) {
        playerSelection = prompt("Rock, paper, or scissors: ");
        let roundResult = playSingleRound(playerSelection, computerPlay());
        console.log(roundResult);
        playerCount += roundResult[0];
        console.log(playerCount);
        computerCount += roundResult[1];
        console.log(computerCount);
        console.log(roundResult[2]);
        if (playerCount === 3) {
            console.log("You win the series!");
            break;
        }
        if (computerCount === 3) {
            console.log("You lose the series :(");
            break;
        }
    }
}