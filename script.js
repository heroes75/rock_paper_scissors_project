const choices = ['rock', 'paper', 'scissors']
//const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];
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
const getHumanChoice = () => {
    const humanChoice = prompt('give your choices between rock, paper, scissors', );
    if (humanChoice === null ) {
        alert('please enter a value');
    } else if (/rock|paper|scissors/i.test(humanChoice)) {
        return humanChoice.toLowerCase();
    } else {
        alert('false')
    }
}
let humanScore = 0;
let computerScore = 0;
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === 'paper' && computerChoice === 'scissors' 
        || humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'scissors' && computerChoice === 'rock'  
    ) {
        computerScore += 1;
        console.log('Computer winner');
    } else if ( computerChoice=== 'paper' && humanChoice === 'scissors' 
        || computerChoice === 'rock' && humanChoice === 'paper'
        || computerChoice === 'scissors' &&  humanChoice === 'rock'  
    ) {
        humanScore += 1;
        console.log('you win');
    } else {
        console.log('egality')
    }
}
//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
//console.log(humanSelection);
//console.log(computerSelection);
//playRound(humanSelection, computerSelection);
const playGame = () => {
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
        console.log('Bravo you win the gane');
    } else if (humanScore < computerScore) {
        console.log('Sorry the computer win the gane');
    } else {
        console.log('EGALITY')
    }
}
playGame()