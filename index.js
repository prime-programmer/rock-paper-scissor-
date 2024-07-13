
let gameRules = ["rock", "paper", "scisssors"]

function getComputerChoice(){
    // let computerChoice = prompt("enter a choice");
    let computerChoice = Math.floor(Math.random()*gameRules.length)
    console.log(gameRules[computerChoice])
   return gameRules[computerChoice]
}



function getplayerChoice(){
    let playerChoice = prompt("enter a choice").toLowerCase();
    if(playerChoice === "rock"){
        return "rock"
    }else if(playerChoice === "scissors"){
        return "scissors"
    }else if(playerChoice === "paper"){
        return "paper"
    }else {
        console.log("Invalid choice! Please select rock, paper or scissors")
        return null
    }
    
}


let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice == "paper"){
        if (computerChoice === "paper"){
            console.log("Draw");
        }
        else if  (computerChoice === "rock"){
            console.log("You win! Paper beats Rock.")
            humanScore ++;
        }
        else {
            console.log("You lose! Scissors beats paper");
            computerScore ++;
        }
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore ++;
        }
        else if  (computerChoice === "rock"){
            console.log("Draw!");
        }
        else{
            console.log("You win! Rock beats Scissors");
            humanScore ++;
        }
    }
    else if(humanChoice === "scissors"){
        if (computerChoice === "paper"){
            console.log("You win! Scissors beat Paper");
            humanScore ++;
        }
        else if  (computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore ++;
        }
        else{
            console.log("Draw");
        }
    }
   
  }


  
  
 
  
  function playGame(){
    for (let i=0; i < 5; i++){
        const humanSelection = getplayerChoice();
        if(humanSelection === " "){
            continue
        }
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }
        console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
        if (humanScore > computerScore){
            console.log("Congrats you won this round");
        }
        else if (computerScore > humanScore) {
            console.log("You lost this round");
        }
        else{
             console.log("It's a draw!");
        }
        let question = prompt("Do you want to play again? (Yes/No)").toLowerCase();
        if (question === "yes"){
            humanScore = 0;
            computerScore = 0;
            playGame();
        } 
        else {
            console.log("Adios");
        }

    
  }

  playGame()