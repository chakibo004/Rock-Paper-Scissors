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

// Partie JOUEUR :

function getUserChoice(){
    return prompt("Rock, paper, or scissors?");
}

// Partie Manche :
function PLAY(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        return "it's a Tie rematch";
    }else if(playerSelection == "rock"){

        if(computerSelection == "paper"){
            return "You lose Paper beats rock"
        }else{
            return "You win!! rock beats rock"
        }

    }else if(playerSelection == "paper"){

        if(computerSelection == "rock"){
            return "You win!! Paper beats rock"
        }else{
            return "You lose Scissors beats paper"
        }

    }else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            return "You win!! Scissors beats Paper";
        } else {
            return "You lose Rock beats Scissors";
        }
    }
}

// Fonction JEU :

function game(){

    let Wins = 0;
    let Loses = 0;
    let Tries = 1;

    let stop = 1;

    while(stop){

        for(let i=0;i<5;i++){
            let playerSelection = getUserChoice();
            let computerSelection = getComputerChoice();

            console.log(`Round ${i+1} : `);
            console.log(`Player choice: ${playerSelection}`);
            console.log(`Computer choice: ${computerSelection}`);

            let result = PLAY(playerSelection,computerSelection);
            if(result.startsWith("You win")){
                Wins++;
            }else if(result.startsWith("You lose")){ 
                Loses++;          
            }
        }
        console.log(`win : ${Wins}`);
        console.log(`Loses : ${Loses}`);

        if(Wins>Loses){
            alert("You won !! \n CONGRATS");
            stop = 0;
        }else{
            alert("You lost it !! \n Is the computer better than you at this point litte peace of shit");
            let answering = prompt("WANNA REVENGE : 'yes or no' ");
            answering = answering.toLowerCase();
            if (answering.startsWith("yes")){
                stop = 1;
                Tries++;
                console.log(`It is your ${Tries} try GO FOR IT`);
            }else{
                stop = 0;
                console.log("What a loser");
            }
        }       
    }
}

// JEU 

game();