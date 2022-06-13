const btn = document.querySelectorAll(".btn");
const result = document.getElementById("res");
const playerID = document.getElementById("player");
const computerID = document.getElementById("computer");
const versus = document.getElementById("computerVsPlayer");

let computer = 0, player = 0, c = 0;

btn.forEach(button => {
    button.addEventListener("click", (e) => {
        c++;
        if (c < 6) {
        result.textContent = playRound(e.target.textContent, computerPlay());
            game();
        }

        if(c === 5){
            computerVsPlayer();
        }

    });
});



function computerPlay() {

    let janken = ((Math.random() * 2.4).toFixed(0));
    const result = ["Rock", "Paper", "Scissors"];

    if (janken === 0) {
        return result[janken];
    }
    if (janken === 1) {
        return result[janken];
    }
    else {
        return result[janken];
    }

}


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return ("Draw");

    }

    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        return ("You Lose! Paper beats Rock");
    }
    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        return ("You Win! Paper beats Rock");
    }

    else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        return ("You Lose! Scissors beats Paper");
    }
    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        return ("You Win! Scissors beats Paper");
    }

    else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        return ("You Lose! Rock beats Scissors");
    }
    else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        return ("You Win! Rock beats Scissors");
    }

    else {
        return ("You have entered wrong input")
    }

}

function game() {

    if ((result.textContent === "You Win! Rock beats Scissors") || (result.textContent === "You Win! Scissors beats Paper") || (result.textContent === "You Win! Paper beats Rock")) {
        player++;
        playerID.textContent = `Player : ${player}`;
    }
    else if ((result.textContent === "You Lose! Rock beats Scissors") || (result.textContent === "You Lose! Scissors beats Paper") || (result.textContent === "You Lose! Paper beats Rock")) {
        computer++;
        computerID.textContent = `Computer : ${computer}`;
    }

}

function computerVsPlayer(){

if (player > computer) {
    versus.textContent = `Player Wins!`;
}
else if (computer > player) {
    versus.textContent = `Computer Wins!`;
}
else if (computer === player){
    versus.textContent = `It's a draw`;
}
}