let playerScore = 0
let compScore = 0

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementsByClassName('result')[0].innerHTML ='You Tied!, you both picked ' + playerSelection;
        document.getElementById("c" + computerSelection).style.boxShadow = " rgb(255, 217, 19) 0px 0px 0px 5px";
        document.getElementById("p" + playerSelection).style.boxShadow = " rgb(255, 217, 19) 0px 0px 0px 5px";
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        document.getElementsByClassName('result')[0].innerHTML ='you lost! computer picked ' + computerSelection;
        document.getElementById("c" + computerSelection).style.boxShadow = " #66ff66 0px 0px 0px 5px";
        document.getElementById("p" + playerSelection).style.boxShadow = " #ff3333 0px 0px 0px 5px";
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        document.getElementsByClassName('result')[0].innerHTML ='you won! computer picked ' + computerSelection;
        document.getElementById("c" + computerSelection).style.boxShadow = " #ff3333 0px 0px 0px 5px";
        document.getElementById("p" + playerSelection).style.boxShadow = " #66ff66 0px 0px 0px 5px";
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        document.getElementsByClassName('result')[0].innerHTML ='You won! computer picked ' + computerSelection;
        document.getElementById("c" + computerSelection).style.boxShadow = " #ff3333 0px 0px 0px 5px";
        document.getElementById("p" + playerSelection).style.boxShadow = " #66ff66 0px 0px 0px 5px";
    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        document.getElementsByClassName('result')[0].innerHTML ='You lost! computer picked ' + computerSelection;
        document.getElementById("c" + computerSelection).style.boxShadow = " #66ff66 0px 0px 0px 5px";
        document.getElementById("p" + playerSelection).style.boxShadow = " #ff3333 0px 0px 0px 5px";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++  
        document.getElementsByClassName('result')[0].innerHTML ='You lost! computer picked ' + computerSelection;
        document.getElementById("c" + computerSelection).style.boxShadow = " #66ff66 0px 0px 0px 5px";
        document.getElementById("p" + playerSelection).style.boxShadow = " #ff3333 0px 0px 0px 5px";
    }
       
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        document.getElementsByClassName('result')[0].innerHTML ='You won! computer picked ' + computerSelection;
        document.getElementById("c" + computerSelection).style.boxShadow = " #ff3333 0px 0px 0px 5px";
        document.getElementById("p" + playerSelection).style.boxShadow = " #66ff66 0px 0px 0px 5px";
    }    
}

    function game(select)  {    
            const playerSelection = select.toLowerCase();
            const computerSelection = getComputerChoice();
            document.getElementById("crock").style.boxShadow = "none";
            document.getElementById("cpaper").style.boxShadow = "none";
            document.getElementById("cscissors").style.boxShadow = "none";
            document.getElementById("prock").style.boxShadow = "none";
            document.getElementById("ppaper").style.boxShadow = "none";
            document.getElementById("pscissors").style.boxShadow = "none";
            console.log(playRound(playerSelection, computerSelection));
            document.getElementsByClassName('play')[0].innerHTML = playerScore;
            document.getElementsByClassName('comp')[0].innerHTML = compScore;
    }

    function reset(){
        playerScore = 0;
        compScore = 0;
        document.getElementsByClassName('play')[0].innerHTML = playerScore;
        document.getElementsByClassName('comp')[0].innerHTML = compScore;
        document.getElementById("crock").style.boxShadow = "none";
        document.getElementById("cpaper").style.boxShadow = "none";
        document.getElementById("cscissors").style.boxShadow = "none";
        document.getElementById("prock").style.boxShadow = "none";
        document.getElementById("ppaper").style.boxShadow = "none";
        document.getElementById("pscissors").style.boxShadow = "none";
        document.getElementsByClassName('result')[0].innerHTML ='Pick One';
    }