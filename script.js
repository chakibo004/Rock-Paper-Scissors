function getRand(){
    return Math.floor(Math.random() * (3));
}

// Partie ORDINATEUR :

function getComputerChoice(){
    let choice=getRand();
    switch(choice){
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}

// Partie Manche :


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');



rockButton.addEventListener('click', function() {
    game('rock',getComputerChoice());
});
  
  paperButton.addEventListener('click', function() {
    game('paper',getComputerChoice());
});
  
  scissorsButton.addEventListener('click', function() {
    game('scissors',getComputerChoice());
})

const resultsDiv = document.querySelector('#results');

function playRound(playerSelection,computerSelection){

    let result;

    if(playerSelection == computerSelection){
        result = "it's a Tie rematch";
    }else if(playerSelection == "rock"){

        if(computerSelection == "paper"){
            result =  "You lose Paper beats rock"
        }else{
            result =  "You win!! rock beats rock"
        }

    }else if(playerSelection == "paper"){

        if(computerSelection == "rock"){
            result =  "You win!! Paper beats rock"
        }else{
            result =  "You lose Scissors beats paper"
        }

    }else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            result =  "You win!! Scissors beats Paper";
        } else {
            result =  "You lose Rock beats Scissors";
        }
    }

    resultsDiv.innerHTML = result;
    return result;

}

// Fonction JEU :

let playerWins = 0;
let computerWins = 0;

    function game(playerSelection,computerSelection) {

        
        let result = playRound(playerSelection, computerSelection);
    
        if (result.startsWith("You win")) {
            playerWins++;
        } else if (result.startsWith("You lose")) {
            computerWins++;
        }
        console.log(playerWins);
        resultsDiv.innerHTML = `Score: Player ${playerWins} - Computer ${computerWins}<br> ${result}`;
        

    
        if (playerWins === 5) {
            resultsDiv.innerHTML = `Congratulations, you win! Player: ${playerWins} Computer: ${computerWins}`;
            playerWins = 0;
            computerWins = 0;
        } else if (computerWins === 5) {
            resultsDiv.innerHTML = `You lose! Player: ${playerWins} Computer: ${computerWins}`;
            playerWins = 0;
            computerWins = 0;
        }
    }


// JEU 