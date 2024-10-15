const choices = ['rock', 'paper', 'scissors']
//const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];
const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const hscore = document.querySelector('.humanScore')
const cscore = document.querySelector('.computerScore')
const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0: 
          return 'rock';
          break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'
    }
}
/*const getHumanChoice = () => {
    const humanChoice = prompt('give your choices between rock, paper, scissors', );
    if (humanChoice === null ) {
        alert('please enter a value');
    } else if (/rock|paper|scissors/i.test(humanChoice)) {
        return humanChoice.toLowerCase();
    } else {
        alert('false')
    }
}*/
let humanScore = 0;
let computerScore = 0;
result.innerHTML = "";
const playRound = (humanChoice, computerChoice) => {
    result.innerHTML = result.innerHTML.includes("Bravo you win the game") 
    ? result.innerHTML.replace("Bravo you win the game", "") 
    :  result.innerHTML.replace("Sorry the computer win the game", "")
    if (humanChoice === 'paper' && computerChoice === 'scissors' 
        || humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'scissors' && computerChoice === 'rock'  
    ) {
        computerScore += 1;
        result.innerHTML += '\n Computer winner ' + computerChoice + " beats " + humanChoice;
    } else if ( computerChoice === 'paper' && humanChoice === 'scissors' 
        || computerChoice === 'rock' && humanChoice === 'paper'
        || computerChoice === 'scissors' &&  humanChoice === 'rock'  
    ) {
        humanScore += 1;
        result.innerHTML += '\n you win  '+ humanChoice + " beats " + computerChoice;
    } else {
        result.innerHTML += '\n egality '
    }
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;
    if (humanScore === 5) {
        result.innerHTML = "Bravo you win the game";
        humanScore = 0;
        computerScore = 0;
        return 
    };
    
    if (computerScore === 5) {
        result.innerHTML = 'Sorry the computer win the game';
        humanScore = 0;
        computerScore = 0;
        return
    };
}
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
//console.log(humanSelection);
//console.log(computerSelection);
//playRound(humanSelection, computerSelection);
/*const playGame = () => {
playRound(getHumanChoice(), getComputerChoice());
console.log('round 1 computer score is: ' + computerScore +' human score: ' + humanScore)
playRound(getHumanChoice(), getComputerChoice());
console.log('round 2 computer score is: ' + computerScore +' human score: ' + humanScore);
playRound(getHumanChoice(), getComputerChoice());
console.log('round 3 computer score is: ' + computerScore +' human score: ' + humanScore);
playRound(getHumanChoice(), getComputerChoice());
console.log('round 4 computer score is: ' + computerScore +' human score: ' + humanScore);
playRound(getHumanChoice(), getComputerChoice());
console.log('round 5 computer score is: ' + computerScore +' human score: ' + humanScore);
playRound(getHumanChoice(), getComputerChoice());
console.log('round 6 computer score is: ' + computerScore +' human score: ' + humanScore);
    if (humanScore > computerScore) {
        console.log('Bravo you win the game');
    } else if (humanScore < computerScore) {
        console.log('Sorry the computer win the gane');
    } else {
        console.log('EGALITY')
    }
}*/
buttons.forEach(button => button.addEventListener('click', e => playRound(e.target.id, getComputerChoice())))
//playGame()