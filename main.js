// choices are either rock paper or scissors, function game does a loop to play the round 5 times and logs every win //
// player choice function gets the input of the player, if there is nothing written in the prompt, then it asks again.//
//computer choice gets a random choice from choices "rock paper or scissors" validate makes sure that the choice is rock paper or scissors //
//checkwinner function gets the player choice and sees if it matches up with the computer choice, which results in a tie, if they win, or if they lose.//
//log round and log wins just logs who wins and who loses and logs it in the console to find out if you win or lose//






const choices = ["rock", "paper", "scissors"]
let winners = [];

function game(){
    for (let i = 1; i<=5; i++){
        playRound();
    }
    document.querySelector("button").textContent = "Play new game"
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
    let input = prompt("Rock paper or scissors");
    while (input == null){
        input = prompt("Type Rock, paper or scissors bro");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        prompt('Type rock paper or scissors only')
    };
    while (input == null) {
        "Type Rock paper scissors.."
    }
    input = input.toLowerCase();
    check = validateInput(input)
    return input;
     
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    return choices.includes(choice)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie"
    } else if (
        (choiceP === "rock" && choiceC == "scissors") ||
        (choiceP === "paper" && choiceC == "rock") ||
        (choiceP === "scissors" && choiceC == "paper")
    ) {
        return "Player";
    } else{
        return "Computer";
    }
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round:", round)
    console.log("Player Chose:", playerChoice)
    console.log("computer choice:", computerChoice)
    console.log(winner," has round the round")
    console.log("-------------------")
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let tie = winners.filter((item) => item == "Tie").length
    console.log("Results:");
    console.log("Player wins:", playerWins);
    console.log("Computer wins:", computerWins);
    console.log(winner, "Won the Round");
    console.log("-----------")
}

game();