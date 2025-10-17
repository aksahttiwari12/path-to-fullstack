
function getcomputerchoice(){
    let randomnum=Math.floor(Math.random()*3)+1;
    let computerchoice;
    if(randomnum===1){
        computerchoice="rock";
    }else if(randomnum==2){
        computerchoice="paper";
    }
    else{
        computerchoice="scissor";
    }
    return computerchoice;
}
function getHumanChoice(){
    let choice=prompt("Enter your choice: rock, paper or scissor");
    return choice;
}
let humanscore=0;
let computerscore=0;
function playgame(){
    let computerchoice=getcomputerchoice();
    let humanchoice=getHumanChoice();
    if(humanchoice===computerchoice){
        alert("It's a tie!");
    }else if((humanchoice==="rock" && computerchoice==="scissor")||(humanchoice==="paper" && computerchoice==="rock")||(humanchoice==="scissor" && computerchoice==="paper")){
        alert("You win!");
        humanscore++;
    }else{
        alert("Computer wins!");
        computerscore++;
    }
    alert(`Score: You - ${humanscore}, Computer - ${computerscore}`);
}
playgame();