let choices = document.querySelectorAll("button");
let msg = document.querySelector("#result");
let total = document.querySelector("#total");
let totalWins = 0;

function computerSelection() {
    let compChoice;
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return compChoice = "rock";
    } else if (randomNum === 1) {
        return compChoice = "paper";
    } else {
        return compChoice = "scissors";
    }
}

function playerSelection() {
    let playerSelection;
    let exit = 0;
    while (exit === 0) {
        playerSelection = prompt("Choose one: rock, paper, scissors").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            exit = 1;
        }
    }
    return playerSelection;
}

function compareSelections(playerChoice, compChoice) {
    let result;
    switch (true) {
        case (playerChoice === compChoice):
            return result = 0;
            break;
        case (playerChoice === "rock" && compChoice === "scissors"):
        case (playerChoice === "paper" && compChoice === "rock"):
        case (playerChoice === "scissors" && compChoice === "paper"):            
            return result = 1;
            break;
        case (compChoice === "rock" && playerChoice ==="scissors"):
        case (compChoice === "paper" && playerChoice ==="rock"):
        case (compChoice === "scissors" && playerChoice ==="paper"):
            return result = -1;
            break;
        default:
            return result = 2;
    }
}

function playRound(playerChoice) {
    // let playerChoice;
    let compChoice;
    let result;
    let message;
    // playerChoice = playerSelection();
    compChoice = computerSelection();
    result = compareSelections(playerChoice, compChoice);
    message = `You chose ${playerChoice}. The computer chose ${compChoice}. `;
    if (result === 0) {
        message += "It was a tie!";
    } else if (result === 1) {
        message += "You won!";
        totalWins += 1;
    } else if (result === -1) {
        message += "You lost.";
    } else {
        message = "Something is wrong";
    }

    return message;
}


for (let choice of Array.from(choices)) {
    choice.addEventListener("click", event => {
        msg.textContent = playRound(choice.id);
        if (totalWins < 5) {
            total.textContent = `Rounds won: ${totalWins}`;
        } else if (totalWins >= 5) {
            total.textContent = "You win the game!"
        }
    });
}


// function game() {
//     let totalWins = 0;
//     console.log("Let\'s play Rock Paper Scissors.");

// }