
let computer = 0, player = 0;

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

// console.log(playRound(Pselection, computerPlay()));
let c = "";

function game() {
    
    for (let i = 0; i < 5; i++) {

        const Pselection = prompt("Enter Rock or Paper or Scissors");
        c = playRound(Pselection, computerPlay());

        if ((c === "You Win! Rock beats Scissors") || (c === "You Win! Scissors beats Paper") || (c === "You Win! Paper beats Rock")) {
            player++;
        }
        else if ((c === "You Lose! Rock beats Scissors") || (c === "You Lose! Scissors beats Paper") || (c === "You Lose! Paper beats Rock")) {
            computer++;
        }

        console.log(c);
    }

    if (player > computer) {
        console.log("Player wins");
    }
    else if (computer > player) {
        console.log("Computer wins");
    }
}

game();