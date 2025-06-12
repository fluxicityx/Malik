const choices = ["rock", "paper", "scissors"]

function game(){
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice(){
    let input = prompt("Rock paper or scissors")
    while (input == null){
        input = prompt("Type Rock, paper or scissors bro")
    }
    input = input.toLowerCase
    let check = validateInput
    if (check == true){
        console.log(input)
    }
    console.log(input)
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    if(choices.includes(choice)){
        return true
    } else{
        return false
    }
}

game()