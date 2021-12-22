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

function checkForWinner(playerCount, computerCount, div) {
    let h1 = document.createElement("h1");
    if (playerCount === 3) {
        h1.textContent = "You win the series!";
        div.appendChild(h1);
    }
    if (computerCount === 3) {
        h1.textContent = "You lose the series :(";  
        div.appendChild(h1);          
    }
    
}

let playerCount = 0;
let computerCount = 0;
let playerSelection;
let roundResult;
const div = document.querySelector("#results");
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundResult = playSingleRound(button.name, computerPlay());
        let p = document.createElement("p");
        p.textContent = roundResult[2];
        div.appendChild(p);
        playerCount += roundResult[0];
        computerCount += roundResult[1];
        checkForWinner(playerCount, computerCount, div);
    });
});





