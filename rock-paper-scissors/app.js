let userScore=0;
let compScore=0;

const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg =document.querySelector(".msg-para");

// Generating Computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndex= Math.floor(Math.random()*3);
    return options[randIndex];
}

//Draw Game
const drawGame = ()=>{
    msg.style.backgroundColor ="navy";
    msg.innerText ="Draw Game ! Play Again.";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
        msg.style.backgroundColor ="green";
        msg.innerText=`You win ! Your ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        comp.innerText=compScore;
        msg.style.backgroundColor ="red";
        msg.innerText=`You lose ! Your ${userChoice} is beaten by ${compChoice}`;
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false :true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false :true;
        }
        else{
            userWin=compChoice==="rock"? false :true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    

}
//Fetching User Choice and playing game
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});